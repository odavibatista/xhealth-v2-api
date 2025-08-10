import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { AdministratorRepository } from '../db/repositories/administrator.repository';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import {
  AdminLoginRequestDTO,
  AdminLoginResponseDTO,
} from '../../domain/dtos/requests/AdminLogin.request.dto';
import { InvalidCredentialsException } from '../../../user/domain/dtos/errors/InvalidCredentials.exception';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';

export class AdminLoginUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private userRepository: AdministratorRepository,
    private readonly jwtProvider: JWTProvider,
  ) {}

  async execute(
    data: AdminLoginRequestDTO,
  ): Promise<
    | AdminLoginResponseDTO
    | InvalidCredentialsException
    | UnprocessableDataException
  > {
    const admin = await this.userRepository.findByEmail(data.email);

    if (!admin || !admin.id_administrator || !admin.name)
      throw new InvalidCredentialsException();

    const isPasswordValid = await this.userRepository.comparePassword(
      admin.id_administrator,
      data.password,
    );

    if (!isPasswordValid) throw new InvalidCredentialsException();

    const token = this.jwtProvider.generate({
      payload: {
        administrator: {
          id: admin.id_administrator,
          administrator_name: admin.name,
        },
      },
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
