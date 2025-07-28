import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JWTProvider } from '../providers/jwt.provider';
import { HashProvider } from '../providers/hash.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [JWTProvider, HashProvider, EncrypterProvider],
  exports: [JWTProvider, HashProvider],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
