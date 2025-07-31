import { User } from '../../../../../shared/infra/db/generated/prisma';
import { CreateUserBodyDTO } from '../requests/CreateUser.request.dto';

export interface UserRepositoryInterface {
  encryptedFields: (keyof User)[];
  findById(id: string): Promise<Partial<User> | null>;
  findByEmail(email: string): Promise<Partial<User> | null>;
  findByPhoneNumber(phoneNumber: string): Promise<Partial<User> | null>;
  findByUsername(username: string): Promise<Partial<User>[] | null>;
  setPassword(id: string, password: string): Promise<Partial<User> | null>;
  create(data: CreateUserBodyDTO): Promise<Partial<User>>
}
