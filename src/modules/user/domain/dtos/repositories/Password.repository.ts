import { PasswordHistory } from "@prisma/client";
import { CreatePasswordHistoryDTO, GetLastPasswordHashDTO } from "./dtos/Password.repository.dto";

export interface PasswordRepositoryInterface {
    encryptedFields: (keyof PasswordHistory)[];
    create(data: CreatePasswordHistoryDTO): Promise<PasswordHistory>
    getByUserId(data: GetLastPasswordHashDTO): Promise<PasswordHistory[]>
}
