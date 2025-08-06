import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { TrainerRepository } from '../db/repositories/trainer.repository';
import { FindTrainerByIDDto } from '../../domain/dtos/requests/FindTrainerByID.request.dto';
import { TrainerNotFoundException } from '../../domain/dtos/errors/TrainerNotFound.exception';

export class FindTrainerByIdUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private trainerRepository: TrainerRepository,
  ) {}

  async execute(
    cuid: string,
  ): Promise<FindTrainerByIDDto | TrainerNotFoundException> {
    const trainer = await this.trainerRepository.findById(cuid);

    if (!trainer) {
      throw new TrainerNotFoundException();
    }

    return {
      id_trainer: trainer.id_trainer,
      name: trainer.name,
      imageUrl: trainer.imageUrl,
      instagramUrl: trainer.instagramUrl,
      twitterUrl: trainer.twitterUrl,
      youtubeUrl: trainer.youtubeUrl,
    } as FindTrainerByIDDto;
  }
}
