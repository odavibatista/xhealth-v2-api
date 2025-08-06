import { Administrator } from '@prisma/client';

export interface AdministratorRepositoryInterface {
  encryptedFields: (keyof Administrator)[];
  findById(id: string): Promise<Partial<Administrator> | null>;
  findByEmail(email: string): Promise<Partial<Administrator> | null>;
  comparePassword(
    adminId: string,
    givenPassword: string,
  ): Promise<boolean | null>;
}
