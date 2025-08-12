import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';
import { GymPlanFeatureRepository } from '../db/repositories/gym-plan-feature.repository';

export class BrowseGymPlansUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private gymPlanRepository: GymPlanRepository,
    @Inject()
    private readonly gymPlanFeatureRepository: GymPlanFeatureRepository,
  ) {}

  async execute(): Promise<FindGymPlanByIDDto[]> {
    const gymPlans = await this.gymPlanRepository.findAll();

    const gymPlansWithFeatures = await Promise.all(
      gymPlans.map(async (plan) => {
        if (!plan.id_gym_plan) {
          throw new Error('Gym plan ID is missing');
        }
        const features = await this.gymPlanFeatureRepository.findByGymPlanId(
          plan.id_gym_plan,
        );
        return {
          ...plan,
          features: features.map((feature) => ({
            id_gym_plan_feature: feature.id_gym_plan_feature,
            feature_name: feature.feature_name,
          })),
        } as FindGymPlanByIDDto;
      }),
    );

    return gymPlansWithFeatures.map((plan) => ({
      id_gym_plan: plan.id_gym_plan,
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
      createdAt: plan.createdAt,
      features: plan.features,
    }));
  }
}
