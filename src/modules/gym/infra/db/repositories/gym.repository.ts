import { Gym } from "@prisma/client";
import { GymRepositoryInterface } from "../../../domain/dtos/repositories/gym.repository.interface";
import { Injectable } from "@nestjs/common";
import { prisma } from "../../../../../shared/infra/db/prisma";
import { FindGymByIDDto } from "../../../domain/dtos/requests/FindGymByID.request.dto";

@Injectable()
export class GymRepository implements GymRepositoryInterface {
    async findById(id: string): Promise<FindGymByIDDto | null> {
        const gym = await prisma.gym.findUnique({
            where: { id_gym: id, deletedAt: null },
            include: {
                address: {
                    select: {
                        id_address: true,
                        street: true,
                        number: true,
                        city: true,
                        cep: true,
                        uf_id: true,
                        complement: true,

                    }
                }
            }
        })

        if (!gym) {
            return null;
        }

        return {
            id_gym: gym?.id_gym,
            name: gym?.name,
            address: {
                id_address: gym?.address?.id_address,
                complement: gym?.address?.complement,
                city: gym?.address?.city,
                cep: gym?.address?.cep,
                uf_id: gym?.address?.uf_id,
                street: gym?.address?.street,
            },
            phone_number: gym?.phone_number,
            imageUrl: gym?.imageUrl,
            created_at: gym?.createdAt.toISOString(),
        } as FindGymByIDDto;
    }
}
