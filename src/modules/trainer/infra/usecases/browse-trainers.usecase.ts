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

    return trainers?.map((trainer) => ({
      id_trainer: trainer.id_trainer,
      name: trainer.name,
      imgUrl: trainer.imageUrl,
      instagramUrl: trainer.instagram,
      twitterUrl: trainer.twitter,
      youtubeUrl: trainer.youtube,
    })) as FindTrainerByIDDto[];
  }
}
