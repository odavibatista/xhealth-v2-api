import { Module } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIdUsecase } from '../usecases/find-gym-plan-by-id.usecase';
import { BrowseGymPlansUsecase } from '../usecases/browse-gym-plans.usecase';
import { GymPlanController } from '../../http/controllers/gym-plan.controller';
import { GymPlanFeatureRepository } from '../db/repositories/gym-plan-feature.repository';

@Module({
  imports: [],
  controllers: [GymPlanController],
  providers: [
    EncrypterProvider,
    GymPlanRepository,
    BrowseGymPlansUsecase,
    FindGymPlanByIdUsecase,
    GymPlanFeatureRepository,
  ],
  exports: [],
})
export class GymPlanModule {}
