import { Injectable } from "@nestjs/common";
import { UserRepositoryInterface } from "../../../domain/dtos/repositories/user.repository";
import { User } from "../../../../../shared/infra/db/generated/prisma";
import { EncrypterProvider } from "../../../../../shared/infra/providers/Encrypter.provider";
import { prisma } from "../../../../../shared/infra/db/prisma";

@Injectable()
export class UserRepository implements UserRepositoryInterface{
    public encryptedFields: (keyof User)[] = [
        'email',
        'password',
        "phone_number"
    ];

    constructor(
        private encrypterProvider: EncrypterProvider,
    ){}

    async findById(id: string): Promise<Partial<User> | null> {
        const user = await prisma.user.findUnique({
            where: {
                id_user: id
            },
            select: {
                id_user: true,
                email: true,
                name: true,
                createdAt: true,
            }
        })

        if (!user) {
            return null
        }

        const decryptedUser = this.encrypterProvider.decryptData(
            user, this.encryptedFields as (keyof typeof user)[]
        )

        return decryptedUser;
    }
}