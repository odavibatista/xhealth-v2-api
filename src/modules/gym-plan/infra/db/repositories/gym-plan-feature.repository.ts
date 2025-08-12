import { GymPlanFeature } from "@prisma/client";
import { GymPlanFeatureRepositoryInterface } from "../../../domain/dtos/repositories/gym-plan-feature-repository.interface";
import { prisma } from "../../../../../shared/infra/db/prisma";

export class GymPlanFeatureRepository implements GymPlanFeatureRepositoryInterface {
    public encryptedFields: (keyof GymPlanFeature)[] = [];

    constructor(){}

    /* This method will find a gym plan feature by its id */
    async findById(id: string): Promise<Partial<GymPlanFeature> | null> {
        const gymPlanFeature = await prisma.gymPlanFeature.findUnique({
            where: {
                id_gym_plan_feature: id,
            },
            select: {
                id_gym_plan_feature: true,
                gym_plan_id: true,
                feature_name: true,
            }
        });

        if (!gymPlanFeature) 
            return null;

        return gymPlanFeature;
    }

    /* This method will find all gym plan features by gym plan id */
    async findByGymPlanId(gymPlanId: string): Promise<Partial<GymPlanFeature>[]> {
        const gymPlanFeatures = await prisma.gymPlanFeature.findMany({
            where: {
                gym_plan_id: gymPlanId,
            },
            select: {
                id_gym_plan_feature: true,
                gym_plan_id: true,
                feature_name: true,
            }
        });

        return gymPlanFeatures;
    }
}
