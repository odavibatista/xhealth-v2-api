import { LoginLog } from "../../../../../shared/infra/db/generated/prisma";
import { LoginLogRepositoryInterface } from "../../../domain/dtos/repositories/LoginLog.repository";
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginLogsRepository implements LoginLogRepositoryInterface {
    async getLastLoginAttempt(user_id: string): Promise<Partial<LoginLog> | null> {
        const loginLog = await prisma.loginLog.findFirst({
            where: { user_id },
            orderBy: { created_at: 'desc' },
        });
        return loginLog ? { id: loginLog.id, user_id: loginLog.user_id, created_at: loginLog.created_at } : null;
    }
}