import { GymPlan } from "../../../../../shared/infra/db/generated/prisma";

export interface GymPlanRepository {
        encryptedFields: (keyof GymPlan)[];
    findById(id: string): Promise<Partial<GymPlan>>;
    findByName(name: string): Promise<Partial<GymPlan>>;
}