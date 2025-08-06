import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { TrainerRepository } from '../db/repositories/trainer.repository';
import { FindTrainerByIDDto } from '../../domain/dtos/requests/FindTrainerByID.request.dto';

export class BrowseTrainersUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private trainerRepository: TrainerRepository,
  ) {}

  async execute(): Promise<FindTrainerByIDDto[]> {
    const trainers = await this.trainerRepository.findAll();

    return trainers.map((trainer) => ({
      id_trainer: trainer.id_trainer,
      name: trainer.name,
      imageUrl: trainer.imageUrl,
      instagramUrl: trainer.instagramUrl,
      twitterUrl: trainer.twitterUrl,
      youtubeUrl: trainer.youtubeUrl,
    })) as FindTrainerByIDDto[];
  }
}
