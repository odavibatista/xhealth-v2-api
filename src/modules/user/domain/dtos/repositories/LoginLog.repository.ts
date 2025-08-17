import { UserLoginLog } from '@prisma/client';
import {
  CreateLoginLogDTO,
  UpdateLastLoginAttemptDTO,
} from './dtos/LoginLogs.repository.dto';

export interface UserLoginLogRepositoryInterface {
  create(data: CreateLoginLogDTO): Promise<void>;
  getLastLoginAttempt(user_id: string): Promise<Partial<UserLoginLog> | null>;
  updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void>;
}
