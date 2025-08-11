import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AddPermissionUsecase } from '../usecases/add-permission.usecase';
import { RemovePermissionUsecase } from '../usecases/remove-permission.usecase';
import { ChangePermissionUsecase } from '../usecases/change-permission.usecase';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AdminPermissionController } from '../../http/controllers/admin-permission.controller';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';
import { AuthenticationMiddleware } from '../../../user/http/middlewares/Auth.middleware';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';

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
    JWTProvider,
  ],
})
export class AdminPermissionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      {
        path: 'permissions/add',
        method: RequestMethod.POST,
      },
      {
        path: 'permissions/change',
        method: RequestMethod.POST,
      },
      {
        path: 'permissions/remove',
        method: RequestMethod.POST,
      },
    );
  }
}
