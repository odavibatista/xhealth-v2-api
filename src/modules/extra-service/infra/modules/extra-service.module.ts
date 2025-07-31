import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [EncrypterProvider],
  exports: [],
})
export class ExtraServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
