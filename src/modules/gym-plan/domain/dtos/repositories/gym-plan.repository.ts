import { GymPlan } from '../../../../../shared/infra/db/generated/prisma';

export interface GymPlanRepositoryInterface {
  encryptedFields: (keyof GymPlan)[];
  findById(id: string): Promise<Partial<GymPlan> | null>;
  findByName(name: string): Promise<Partial<GymPlan>[] | null>;
}
