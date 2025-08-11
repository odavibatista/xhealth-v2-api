import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AddPermissionUsecase } from '../usecases/add-permission.usecase';
import { RemovePermissionUsecase } from '../usecases/remove-permission.usecase';
import { ChangePermissionUsecase } from '../usecases/change-permission.usecase';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AdminPermissionController } from '../../http/controllers/admin-permission.controller';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';

@Module({
  controllers: [AdminPermissionController],
  providers: [
    AdminPermissionRepository,
    HashProvider,
    EncrypterProvider,
    AdministratorRepository,
    AddPermissionUsecase,
    RemovePermissionUsecase,
    ChangePermissionUsecase,
  ],
})
export class AdminPermissionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
