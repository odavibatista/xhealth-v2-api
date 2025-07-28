import { Testimony } from "../../../../../shared/infra/db/generated/prisma";

export interface TestimoniesRepositoryInterface {
    encryptedFields: (keyof Testimony)[];
    findById(id: string): Promise<Partial<Testimony>>;
    findByName(name: string): Promise<Partial<Testimony>>;
}