import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';

export class BrowseGymPlansUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private gymPlanRepository: GymPlanRepository,
  ) {}

  async execute(): Promise<FindGymPlanByIDDto[]> {
    const gymPlans = await this.gymPlanRepository.findAll();

    return gymPlans?.map((gymPlan) => ({
      id_gym_plan: gymPlan.id_gym_plan,
      name: gymPlan.name,
      description: gymPlan.description,
      price: gymPlan.price,
      duration: gymPlan.duration,
      createdAt: gymPlan.createdAt,
    })) as FindGymPlanByIDDto[];
  }
}
