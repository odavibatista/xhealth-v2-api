import { Gym } from '@prisma/client';
import { FindGymByIDDto } from '../requests/FindGymByID.request.dto';
import { CreateGymBodyDTO } from '../requests/CreateGym.request.dto';

export interface GymRepositoryInterface {
  encryptedFields: (keyof Gym)[];
  findAll(): Promise<FindGymByIDDto[]>;
  findById(id: string): Promise<FindGymByIDDto | null>;
  findByPhoneNumber(phone_number: string): Promise<FindGymByIDDto | null>;
  create(data: CreateGymBodyDTO, admin_id: string): Promise<Partial<Gym>>;
}
