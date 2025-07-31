import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [EncrypterProvider, ExtraServiceRepository],
  exports: [],
})
export class ExtraServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
