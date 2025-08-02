import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JWTProvider } from '../providers/jwt.provider';
import { HashProvider } from '../providers/hash.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { UserRepository } from '../db/repositories/user.repository';
import { LoginLogsRepository } from '../db/repositories/LoginLog.repository';
import { PasswordRepository } from '../db/repositories/Password.repository';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AuthenticationMiddleware } from '../../http/middlewares/Auth.middleware';
import { UserController } from '../../http/controllers/user.controller';
import { CreateUserUseCase } from '../usecases/create-user.usecase';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    JWTProvider,
    HashProvider,
    EncrypterProvider,
    UserRepository,
    LoginLogsRepository,
    PasswordRepository,
    AddressRepository,
    CreateUserUseCase,
  ],
  exports: [JWTProvider, HashProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware);
  }
}
