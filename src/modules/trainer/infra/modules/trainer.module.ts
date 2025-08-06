import { Module } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { BrowseTrainersUsecase } from '../usecases/browse-trainers.usecase';
import { FindTrainerByIdUsecase } from '../usecases/find-trainer-by-id.usecase';
import { TrainerRepository } from '../db/repositories/trainer.repository';
import { TrainerController } from '../../http/controllers/trainer.controller';

@Module({
  controllers: [TrainerController],
  providers: [
    EncrypterProvider,
    TrainerRepository,
    BrowseTrainersUsecase,
    FindTrainerByIdUsecase,
  ],
})
export class TrainerModule {}
