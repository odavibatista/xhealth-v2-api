import { LoginLog } from "../../../../../shared/infra/db/generated/prisma";

export interface LoginLogRepositoryInterface {
    getLastLoginAttempt(user_id: string): Promise<Partial<LoginLog> | null>;
}
