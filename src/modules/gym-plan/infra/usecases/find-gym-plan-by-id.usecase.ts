import { Inject } from '@nestjs/common';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';
import { GymPlanNotFoundException } from '../../domain/dtos/errors/GymPlanNotFound.exception';
import { GymPlanFeatureRepository } from '../db/repositories/gym-plan-feature.repository';

export class FindGymPlanByIdUsecase {
  constructor(
    @Inject()
    private gymPlanRepository: GymPlanRepository,
    @Inject()
    private readonly gymPlanFeatureRepository: GymPlanFeatureRepository,
  ) {}

  async execute(cuid: string): Promise<FindGymPlanByIDDto | null> {
    const gymPlan = await this.gymPlanRepository.findById(cuid);

    if (!gymPlan) throw new GymPlanNotFoundException();

    const gymPlanFeatures =
      await this.gymPlanFeatureRepository.findByGymPlanId(cuid);

    return {
      id_gym_plan: gymPlan.id_gym_plan,
      name: gymPlan.name,
      description: gymPlan.description,
      price: gymPlan.price,
      duration: gymPlan.duration,
      createdAt: gymPlan.createdAt,
      features: gymPlanFeatures.map((feature) => ({
        id_gym_plan_feature: feature.id_gym_plan_feature,
        feature_name: feature.feature_name,
      })),
    } as FindGymPlanByIDDto;
  }
}
