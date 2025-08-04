import { Module } from '@nestjs/common';
import { GymRepository } from '../db/repositories/gym.repository';
import { BrowseGymsUsecase } from '../usecases/browse-gyms.usecase';
import { FindGymByIdUsecase } from '../usecases/find-gym-by-id.usecase';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymController } from '../../http/controllers/gym.controller';

@Module({
  controllers: [GymController],
  providers: [
    GymRepository,
    BrowseGymsUsecase,
    FindGymByIdUsecase,
    EncrypterProvider,
  ],
})
export class GymModule {}
