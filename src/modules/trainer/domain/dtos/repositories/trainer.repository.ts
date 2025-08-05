import { Trainer } from '../../../../../shared/infra/db/generated/prisma';

export interface TrainerRepositoryInterface {
  encryptedFields: (keyof Trainer)[];
  findAll(): Promise<Partial<Trainer>[]>;
  findById(id: string): Promise<Partial<Trainer> | null>;
  findByName(name: string): Promise<Partial<Trainer>[] | null>;
}
