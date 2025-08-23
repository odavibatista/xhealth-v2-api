import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { AdministratorRepository } from '../db/repositories/administrator.repository';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import {
  AdminLoginRequestDTO,
  AdminLoginResponseDTO,
} from '../../domain/dtos/requests/AdminLogin.request.dto';
import { InvalidCredentialsException } from '../../../user/domain/dtos/errors/InvalidCredentials.exception';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { AdminLoginLogRepository } from '../db/repositories/admin-login-log.repository';
import { DateProvider } from '../../../../shared/infra/providers/Date.provider';

export class AdminLoginUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private adminrepository: AdministratorRepository,
    @Inject()
    private readonly adminLoginLogRepository: AdminLoginLogRepository,
    private readonly jwtProvider: JWTProvider,
    private readonly dateProvider: DateProvider,
  ) {}

  async execute(
    data: AdminLoginRequestDTO,
    ip: string,
  ): Promise<
    | AdminLoginResponseDTO
    | InvalidCredentialsException
    | UnprocessableDataException
  > {
    const admin = await this.adminrepository.findByEmail(data.email);

    if (!admin || !admin.id_administrator || !admin.name)
      throw new InvalidCredentialsException();

    const isPasswordValid = await this.adminrepository.comparePassword(
      admin.id_administrator,
      data.password,
    );

    if (!isPasswordValid) {
      const lastAdminLoginAttempt =
        await this.adminLoginLogRepository.getLastLoginAttempt(
          admin.id_administrator,
        );

      if (!lastAdminLoginAttempt) {
        await this.adminLoginLogRepository.create({
          admin_id: admin.id_administrator,
          ip,
          login_attempt: 1,
          is_blocked: false,
        });
      } else {
        const isWithInInterval = lastAdminLoginAttempt.updated_at
          ? this.dateProvider.isWithin15Minutes(
              lastAdminLoginAttempt.updated_at,
            )
          : false;

        if (isWithInInterval && lastAdminLoginAttempt.is_blocked) {
          throw new UnauthorizedException(
            'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
          );
        }

        await this.adminLoginLogRepository.updateLastLoginAttempt({
          last_login_attempt_id: lastAdminLoginAttempt.id_admin_login_log!,
          login_attempt:
            (lastAdminLoginAttempt.login_attempt ?? 0) + 1 >= 5
              ? 5
              : (lastAdminLoginAttempt.login_attempt ?? 0) + 1,
          is_blocked: (lastAdminLoginAttempt.login_attempt ?? 0) + 1 === 5,
        });

        if ((lastAdminLoginAttempt.login_attempt ?? 0) + 1 === 5) {
          throw new UnauthorizedException(
            'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
          );
        } else {
          throw new InvalidCredentialsException();
        }
      }
    }

    const lastAdminLoginAttempt =
      await this.adminLoginLogRepository.getLastLoginAttempt(
        admin.id_administrator,
      );

    if (lastAdminLoginAttempt && lastAdminLoginAttempt.login_attempt === 5) {
      const isWithinInterval = lastAdminLoginAttempt.updated_at
        ? this.dateProvider.isWithin15Minutes(lastAdminLoginAttempt.updated_at)
        : false;

      if (isWithinInterval) {
        throw new UnauthorizedException(
          'Usuário bloqueado por tentativas inválidas. Tente novamente mais tarde.',
        );
      }
    }

    const token = this.jwtProvider.generate({
      payload: {
        administrator: {
          id: admin.id_administrator,
          administrator_name: admin.name,
        },
      },
    });

    await this.adminLoginLogRepository.create({
      admin_id: admin?.id_administrator,
      ip,
      login_attempt: 1,
      is_blocked: false,
    });

    return {
      token,
      admin: {
        id_admin: admin.id_administrator,
        name: admin.name,
      },
    };
  }
}
