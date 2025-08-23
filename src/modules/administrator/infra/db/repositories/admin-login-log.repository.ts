import { AdminLoginLog } from '@prisma/client';
import { AdminLoginLogRepositoryInterface } from '../../../domain/dtos/repositories/admin-login-log.repository.interface';
import { CreateAdminLoginLogDTO } from '../../../domain/dtos/repositories/dtos/LoginLogs.repository.dto';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { UpdateLastLoginAttemptDTO } from '../../../../user/domain/dtos/repositories/dtos/LoginLogs.repository.dto';

export class AdminLoginLogRepository
  implements AdminLoginLogRepositoryInterface
{
  async create(data: CreateAdminLoginLogDTO): Promise<void> {
    await prisma.adminLoginLog.create({
      data: {
        administrator_id: data.admin_id,
        ip: Array.isArray(data.ip) ? data.ip.join(', ') : data.ip,
        login_attempt: data.login_attempt ?? 0,
        is_blocked: data.is_blocked,
      },
    });
  }

  async getLastLoginAttempt(
    administrator_id: string,
  ): Promise<Partial<AdminLoginLog>> {
    const lastAttempt = await prisma.adminLoginLog.findFirst({
      where: {
        administrator_id,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return {
      administrator_id: lastAttempt?.administrator_id,
      id_admin_login_log: lastAttempt?.id_admin_login_log,
      login_attempt: lastAttempt?.login_attempt,
      is_blocked: lastAttempt?.is_blocked,
      updated_at: lastAttempt?.updated_at,
    };
  }

  async updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void> {
    await prisma.adminLoginLog.update({
      where: {
        id_admin_login_log: data.last_login_attempt_id,
      },
      data: {
        login_attempt: data.login_attempt,
        is_blocked: data.is_blocked,
      },
    });
  }
}
