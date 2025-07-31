import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JWTProvider } from '../providers/jwt.provider';
import { HashProvider } from '../providers/hash.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { UserRepository } from '../db/repositories/User.repository';
import { LoginLogsRepository } from '../db/repositories/LoginLog.repository';
import { PasswordRepository } from '../db/repositories/Password.repository';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AuthenticationMiddleware } from '../../http/middlewares/Auth.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [
    JWTProvider,
    HashProvider,
    EncrypterProvider,
    UserRepository,
    LoginLogsRepository,
    PasswordRepository,
    AddressRepository,
  ],
  exports: [JWTProvider, HashProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware)
  }
}
