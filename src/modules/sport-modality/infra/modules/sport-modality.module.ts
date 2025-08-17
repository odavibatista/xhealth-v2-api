import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { SportModalityController } from '../../http/controllers/sport-modality.controller';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { AuthenticationMiddleware } from '../../../user/http/middlewares/Auth.middleware';
import { HashProvider } from '../../../user/infra/providers/hash.provider';

@Module({
  providers: [
    EncrypterProvider,
    HashProvider,
    AdministratorRepository,
    AdminPermissionRepository,
    JWTProvider,
  ],
  controllers: [SportModalityController],
})
export class SportModalityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      {
        path: 'sport-modalities/create',
        method: RequestMethod.POST,
      },
      {
        path: 'sport-modalities/edit/:cuid',
        method: RequestMethod.PATCH,
      },
      {
        path: 'sport-modalities/delete/:cuid',
        method: RequestMethod.DELETE,
      },
    );
  }
}
