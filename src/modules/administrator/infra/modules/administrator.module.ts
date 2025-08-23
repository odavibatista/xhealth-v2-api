import { Module } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { AdministratorRepository } from '../db/repositories/administrator.repository';
import { AdminLoginUsecase } from '../usecases/admin-login.usecase';
import { AdminController } from '../../http/controllers/admin.controller';
import { AdminLoginLogRepository } from '../db/repositories/admin-login-log.repository';
import { DateProvider } from '../../../../shared/infra/providers/Date.provider';

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [
    EncrypterProvider,
    HashProvider,
    JWTProvider,
    DateProvider,
    AdministratorRepository,
    AdminLoginUsecase,
    AdminLoginLogRepository,
  ],
  exports: [],
})
export class AdministratorModule {}
