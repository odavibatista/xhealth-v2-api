import { Module } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { AdministratorRepository } from '../db/repositories/administrator.repository';
import { AdminLoginUsecase } from '../usecases/admin-login.usecase';

@Module({
  imports: [],
  controllers: [],
  providers: [
    EncrypterProvider,
    HashProvider,
    JWTProvider,
    AdministratorRepository,
    AdminLoginUsecase,
  ],
  exports: [],
})
export class AdministratorModule {}
