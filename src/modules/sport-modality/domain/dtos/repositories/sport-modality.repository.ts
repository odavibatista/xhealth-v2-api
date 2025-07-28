import { SportModality } from "../../../../../shared/infra/db/generated/prisma";

export interface SportModalityInterface {
    encryptedFields: (keyof SportModality)[];
    findById(id: string): Promise<Partial<SportModality>>;
    findByName(name: string): Promise<Partial<SportModality>>;
}
