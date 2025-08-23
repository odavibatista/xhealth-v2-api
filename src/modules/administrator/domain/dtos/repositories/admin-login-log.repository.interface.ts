import { AdminLoginLog } from '@prisma/client';
import { UpdateLastLoginAttemptDTO } from '../../../../user/domain/dtos/repositories/dtos/LoginLogs.repository.dto';
import { CreateAdminLoginLogDTO } from './dtos/LoginLogs.repository.dto';

export interface AdminLoginLogRepositoryInterface {
  create(data: CreateAdminLoginLogDTO): Promise<void>;
  getLastLoginAttempt(admin_id: string): Promise<Partial<AdminLoginLog>>;
  updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void>;
}
