import { Administrator } from "../../../../../shared/infra/db/generated/prisma";

export interface AdministratorRepositoryInterface {
    encryptedFields: (keyof Administrator)[];
    findById(id: string): Promise<Partial<Administrator>>;
    findByEmail(email: string): Promise<Partial<Administrator>>;
}
