import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { UserRepository } from '../db/repositories/user.repository';
import { UserLoginLogsRepository } from '../db/repositories/UserLoginLog.repository';
import { JWTProvider } from '../providers/jwt.provider';
import { DateProvider } from '../../../../shared/infra/providers/Date.provider';
import {
  UserLoginRequestDTO,
  UserLoginResponseDTO,
} from '../../domain/dtos/requests/UserLogin.request.dto';
import { InvalidCredentialsException } from '../../domain/dtos/errors/InvalidCredentials.exception';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';

export class UserLoginUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private userRepository: UserRepository,
    @Inject()
    private readonly userLoginLogRepo: UserLoginLogsRepository,
    private readonly jwtProvider: JWTProvider,
    private readonly dateProvider: DateProvider,
  ) {}

  async execute(
    data: UserLoginRequestDTO,
    ip: string,
  ): Promise<
    | UserLoginResponseDTO
    | InvalidCredentialsException
    | UnauthorizedException
    | UnprocessableDataException
  > {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user || !user.id_user || !user.name)
      throw new InvalidCredentialsException();

    const isPasswordValid = await this.userRepository.comparePassword(
      user.id_user,
      data.password,
    );

    if (!isPasswordValid) {
      const lastUserLoginAttempt =
        await this.userLoginLogRepo.getLastLoginAttempt(user.id_user);

      if (!lastUserLoginAttempt) {
        await this.userLoginLogRepo.create({
          user_id: user.id_user,
          ip,
          login_attempt: 1,
          is_blocked: false,
        });
      } else {
        const isWithInInterval = lastUserLoginAttempt.updated_at
          ? this.dateProvider.isWithin15Minutes(lastUserLoginAttempt.updated_at)
          : false;

        if (isWithInInterval && lastUserLoginAttempt.is_blocked) {
          throw new UnauthorizedException(
            'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
          );
        }

        await this.userLoginLogRepo.updateLastLoginAttempt({
          last_login_attempt_id: lastUserLoginAttempt.id_user_login_log!,
          login_attempt:
            (lastUserLoginAttempt.login_attempt ?? 0) + 1 >= 5
              ? 5
              : (lastUserLoginAttempt.login_attempt ?? 0) + 1,
          is_blocked: (lastUserLoginAttempt.login_attempt ?? 0) + 1 === 5,
        });

        if ((lastUserLoginAttempt.login_attempt ?? 0) + 1 === 5) {
          throw new UnauthorizedException(
            'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
          );
        } else {
          throw new InvalidCredentialsException();
        }
      }
    }

    const lastUserLoginAttempt =
      await this.userLoginLogRepo.getLastLoginAttempt(user.id_user);

    if (lastUserLoginAttempt && lastUserLoginAttempt.login_attempt === 5) {
      const isWithinInterval = lastUserLoginAttempt.updated_at
        ? this.dateProvider.isWithin15Minutes(lastUserLoginAttempt.updated_at)
        : false;

      if (isWithinInterval) {
        throw new UnauthorizedException(
          'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
        );
      }
    }

    const token = this.jwtProvider.generate({
      payload: {
        user: {
          id_user: user.id_user,
          name: user.name,
          plan_id: user.gym_plan_id,
        },
      },
    });

    await this.userLoginLogRepo.create({
      user_id: user.id_user,
      ip,
      login_attempt: 1,
      is_blocked: false,
    });

    return {
      token,
      user: {
        id_user: user.id_user,
        name: user.name,
      },
    };
  }
}
