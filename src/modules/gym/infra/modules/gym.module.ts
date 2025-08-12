import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GymRepository } from '../db/repositories/gym.repository';
import { BrowseGymsUsecase } from '../usecases/browse-gyms.usecase';
import { FindGymByIdUsecase } from '../usecases/find-gym-by-id.usecase';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymController } from '../../http/controllers/gym.controller';
import { CreateGymUsecase } from '../usecases/create-gym.usecase';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { AuthenticationMiddleware } from '../../../user/http/middlewares/Auth.middleware';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { UserRepository } from '../../../user/infra/db/repositories/user.repository';
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';

@Module({
  controllers: [GymController],
  providers: [
    GymRepository,
    BrowseGymsUsecase,
    FindGymByIdUsecase,
    EncrypterProvider,
    CreateGymUsecase,
    AddressRepository,
    AdministratorRepository,
    AdminPermissionRepository,
    HashProvider,
    JWTProvider,
    UserRepository,
    UfRepository,
  ],
})
export class GymModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes({
      path: 'gyms/create',
      method: RequestMethod.POST,
    });
  }
}
