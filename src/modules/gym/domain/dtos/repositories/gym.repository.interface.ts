import { Gym } from "@prisma/client";
import { FindGymByIDDto } from "../requests/FindGymByID.request.dto";

export interface GymRepositoryInterface {
    findAll(): Promise<Partial<Gym>[]>;
    findById(id: string): Promise<FindGymByIDDto | null>;

}
