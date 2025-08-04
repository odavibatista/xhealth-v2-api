import { Inject } from '@nestjs/common';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';
import { GymPlanNotFoundException } from '../../domain/dtos/errors/GymPlanNotFound.exception';

export class FindGymPlanByIdUsecase {
  constructor(
    @Inject()
    private gymPlanRepository: GymPlanRepository,
  ) {}

  async execute(cuid: string): Promise<FindGymPlanByIDDto | null> {
    const gymPlan = await this.gymPlanRepository.findById(cuid);

    if (!gymPlan) throw new GymPlanNotFoundException();

    return {
      id_gym_plan: gymPlan.id_gym_plan,
      name: gymPlan.name,
      description: gymPlan.description,
      price: gymPlan.price,
      duration: gymPlan.duration,
      createdAt: gymPlan.createdAt,
    } as FindGymPlanByIDDto;
  }
}
