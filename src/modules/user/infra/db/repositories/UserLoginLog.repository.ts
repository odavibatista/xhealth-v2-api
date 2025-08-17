import { LoginLog } from '../../../../../shared/infra/db/generated/prisma';
import { UserLoginLogRepositoryInterface } from '../../../domain/dtos/repositories/UserLoginLog.repository';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from '@nestjs/common';
import {
  CreateUserLoginLogDTO,
  UpdateLastLoginAttemptDTO,
} from '../../../domain/dtos/repositories/dtos/LoginLogs.repository.dto';
import { UserLoginLog } from '@prisma/client';

@Injectable()
export class UserLoginLogsRepository
  implements UserLoginLogRepositoryInterface
{
  async getLastLoginAttempt(
    user_id: string,
  ): Promise<Partial<UserLoginLog> | null> {
    const loginLog = await prisma.userLoginLog.findFirst({
      where: { user_id },
      orderBy: { created_at: 'desc' },
    });
    return loginLog
      ? {
          id_user_login_log: loginLog.id_user_login_log,
          user_id: loginLog.user_id,
          created_at: loginLog.created_at,
        }
      : null;
  }

  async create(data: CreateUserLoginLogDTO): Promise<void> {
    await prisma.userLoginLog.create({
      data: {
        user_id: data.user_id,
        ip: Array.isArray(data.ip) ? data.ip.join(', ') : data.ip,
        login_attempt: data.login_attempt ?? 0,
        is_blocked: data.is_blocked,
      },
    });
  }

  async updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void> {
    await prisma.userLoginLog.update({
      where: {
        id_user_login_log: data.last_login_attempt_id,
      },
      data: {
        login_attempt: data.login_attempt,
        is_blocked: data.is_blocked,
      },
    });
  }
}
