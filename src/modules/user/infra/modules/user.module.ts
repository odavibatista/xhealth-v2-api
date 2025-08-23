import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JWTProvider } from '../providers/jwt.provider';
import { HashProvider } from '../providers/hash.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { UserRepository } from '../db/repositories/user.repository';
import { UserLoginLogsRepository } from '../db/repositories/UserLoginLog.repository';
import { PasswordRepository } from '../db/repositories/Password.repository';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AuthenticationMiddleware } from '../../http/middlewares/Auth.middleware';
import { UserController } from '../../http/controllers/user.controller';
import { CreateUserUseCase } from '../usecases/create-user.usecase';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';
import { GymRepository } from '../../../gym/infra/db/repositories/gym.repository';
import { GymPlanRepository } from '../../../gym-plan/infra/db/repositories/gym-plan.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    JWTProvider,
    HashProvider,
    EncrypterProvider,
    UserRepository,
    UserLoginLogsRepository,
    PasswordRepository,
    AddressRepository,
    CreateUserUseCase,
    AdministratorRepository,
    UfRepository,
    GymRepository,
    GymPlanRepository,
  ],
  exports: [JWTProvider, HashProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware);
  }
}
