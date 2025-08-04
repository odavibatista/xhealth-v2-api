import { Gym } from '@prisma/client';
import { FindGymByIDDto } from '../requests/FindGymByID.request.dto';

export interface GymRepositoryInterface {
  encryptedFields: (keyof Gym)[];
  findAll(): Promise<FindGymByIDDto[]>;
  findById(id: string): Promise<FindGymByIDDto | null>;
}
