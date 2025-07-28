import { User } from '../../../../../shared/infra/db/generated/prisma';

export interface UserRepositoryInterface {
  encryptedFields: (keyof User)[];
  findById(id: string): Promise<Partial<User>>;
  findByEmail(email: string): Promise<Partial<User>>;
  findByPhoneNumber(phoneNumber: string): Promise<Partial<User>>;
  findByUsername(username: string): Promise<Partial<User>>;
  setPassword(id: string, password: string): Promise<void>;
}