import { LoginLog } from '../../../../../shared/infra/db/generated/prisma';
import {
  CreateLoginLogDTO,
  UpdateLastLoginAttemptDTO,
} from './dtos/LoginLogs.repository.dto';

export interface LoginLogRepositoryInterface {
  create(data: CreateLoginLogDTO): Promise<void>;
  getLastLoginAttempt(user_id: string): Promise<Partial<LoginLog> | null>;
  updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void>;
}
