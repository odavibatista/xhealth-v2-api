import { User } from '../../../../../shared/infra/db/generated/prisma';

export interface UserRepositoryInterface {
  encryptedFields: (keyof User)[];
  findById(id: string): Promise<Partial<User> | null>;
  findByEmail(email: string): Promise<Partial<User> | null>;
  findByPhoneNumber(phoneNumber: string): Promise<Partial<User> | null>;
  findByUsername(username: string): Promise<Partial<User>[] | null>;
  setPassword(id: string, password: string): Promise<void>;
}