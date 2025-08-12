import { Injectable } from '@nestjs/common';
import { GymPlan } from '../../../../../shared/infra/db/generated/prisma';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { GymPlanRepositoryInterface } from '../../../domain/dtos/repositories/gym-plan.repository';

@Injectable()
export class GymPlanRepository implements GymPlanRepositoryInterface {
  public encryptedFields: (keyof GymPlan)[] = ['price', 'duration'];

  constructor(
    private readonly encrypterProvider: EncrypterProvider,
  ) {}

  /* This method will find all gym plans */
  async findAll(): Promise<Partial<GymPlan>[]> {
    const gymPlans = await prisma.gymPlan.findMany({
      where: {
        deletedAt: null,
      },
    });

    return gymPlans?.map((plan) =>
      this.encrypterProvider.decryptData(
        plan,
        this.encryptedFields as (keyof typeof plan)[],
      ),
    );
  }

  /* This method will find a single gym plan by its id */
  async findById(id: string): Promise<Partial<GymPlan> | null> {
    const gymPlan = await prisma.gymPlan.findUnique({
      where: {
        id_gym_plan: id,
        deletedAt: null,
      },
      select: {
        id_gym_plan: true,
        name: true,
        description: true,
        price: true,
        createdAt: true,
      },
    });

    if (!gymPlan) {
      return null;
    }

    const decryptedGymPlan = this.encrypterProvider.decryptData(
      gymPlan,
      this.encryptedFields as (keyof typeof gymPlan)[],
    );

    return decryptedGymPlan;
  }

  /* This method will find gym plans by their name */
  async findByName(name: string): Promise<Partial<GymPlan>[] | null> {
    const gymPlans = await prisma.gymPlan.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      select: {
        id_gym_plan: true,
        name: true,
        description: true,
        price: true,
        createdAt: true,
      },
    });

    if (!gymPlans || gymPlans.length === 0) {
      return null;
    }

    const decryptedGymPlans = gymPlans.map((plan) =>
      this.encrypterProvider.decryptData(
        plan,
        this.encryptedFields as (keyof typeof plan)[],
      ),
    );

    return decryptedGymPlans;
  }
}
