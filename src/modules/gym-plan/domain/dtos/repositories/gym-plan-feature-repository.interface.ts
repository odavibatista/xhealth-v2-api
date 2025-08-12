import { GymPlanFeature } from "@prisma/client";

export interface GymPlanFeatureRepositoryInterface {
    findById(id: string): Promise<Partial<GymPlanFeature> | null>;
    findByGymPlanId(gymPlanId: string): Promise<Partial<GymPlanFeature>[]>;
}
