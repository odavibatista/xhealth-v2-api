import { Trainer } from "../../../../../shared/infra/db/generated/prisma";

export interface TrainerRepository {
    encryptedFields: (keyof Trainer)[];
    findById(id: string): Promise<Partial<Trainer>>;
    findByName(name: string): Promise<Partial<Trainer>>;
}
