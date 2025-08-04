import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';
import { ExtraServiceController } from '../../http/controllers/extra-service.controller';
import { FindExtraServiceUsecase } from '../usecases/find-extra-service.usecase';
import { BrowseExtraServicesUsecase } from '../usecases/browse-extra-services.usecase';

@Module({
  imports: [],
  controllers: [ExtraServiceController],
  providers: [
    EncrypterProvider,
    ExtraServiceRepository,
    BrowseExtraServicesUsecase,
    FindExtraServiceUsecase,
  ],
  exports: [],
})
export class ExtraServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
