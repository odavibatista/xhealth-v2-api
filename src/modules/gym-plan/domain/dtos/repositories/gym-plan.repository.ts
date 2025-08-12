import { GymPlan } from '@prisma/client';

export interface GymPlanRepositoryInterface {
  encryptedFields: (keyof GymPlan)[];
  findAll(): Promise<Partial<GymPlan>[]>;
  findById(id: string): Promise<Partial<GymPlan> | null>;
  findByName(name: string): Promise<Partial<GymPlan>[] | null>;
}
