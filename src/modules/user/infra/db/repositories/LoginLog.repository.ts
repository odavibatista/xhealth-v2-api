import { LoginLog } from '../../../../../shared/infra/db/generated/prisma';
import { LoginLogRepositoryInterface } from '../../../domain/dtos/repositories/LoginLog.repository';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from '@nestjs/common';
import {
  CreateLoginLogDTO,
  UpdateLastLoginAttemptDTO,
} from '../../../domain/dtos/repositories/dtos/LoginLogs.repository.dto';

@Injectable()
export class LoginLogsRepository implements LoginLogRepositoryInterface {
  async getLastLoginAttempt(
    user_id: string,
  ): Promise<Partial<LoginLog> | null> {
    const loginLog = await prisma.loginLog.findFirst({
      where: { user_id },
      orderBy: { created_at: 'desc' },
    });
    return loginLog
      ? {
          id: loginLog.id,
          user_id: loginLog.user_id,
          created_at: loginLog.created_at,
        }
      : null;
  }

  async create(data: CreateLoginLogDTO): Promise<void> {
    await prisma.loginLog.create({
      data: {
        user_id: data.user_id,
        ip: Array.isArray(data.ip) ? data.ip.join(', ') : data.ip,
        login_attempt: data.login_attempt ?? 0,
        is_blocked: data.is_blocked,
      },
    });
  }

  async updateLastLoginAttempt(data: UpdateLastLoginAttemptDTO): Promise<void> {
    await prisma.loginLog.update({
      where: {
        id: data.last_login_attempt_id,
      },
      data: {
        login_attempt: data.login_attempt,
        is_blocked: data.is_blocked,
      },
    });
  }
}
