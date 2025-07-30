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

    /* This method will find a single user using a given id */
    async findById(id: string): Promise<Partial<User> | null> {
        const user = await prisma.user.findUnique({
            where: {
                id_user: id
            },
            select: {
                id_user: true,
                email: true,
                phone_number: true,
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

    /* This method will find a single user using a given email */
    async findByEmail(email: string): Promise<Partial<User> | null> {
        const encryptedEmail = this.encrypterProvider.encrypt({
            content: email
        });

        const user = await prisma.user.findUnique({
            where: {
                email: encryptedEmail
            },
            select: {
                id_user: true,
                email: true,
                phone_number: true,
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

    /* This method will find a single user using a given phonenumber */
    async findByPhoneNumber(phoneNumber: string): Promise<Partial<User> | null> {
        const encryptedPhoneNumber = this.encrypterProvider.encrypt({
            content: phoneNumber
        });

        const user = await prisma.user.findUnique({
            where: {
                phone_number: encryptedPhoneNumber
            },
            select: {
                id_user: true,
                email: true,
                phone_number: true,
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

    /* This method will find a list of users given a string */
    async findByUsername(username: string): Promise<Partial<User>[] | null> {

        const users = await prisma.user.findMany({
            where: {
                name: {
                    contains: username,
                }
            },
            select: {
                id_user: true,
                email: true,
                phone_number: true,
                name: true,
                createdAt: true,
            }
        })

        if (!users) {
            return null
        }

        const decryptedUsers = users.map(user => this.encrypterProvider.decryptData(
            user, this.encryptedFields as (keyof typeof user)[]
        ))

        return decryptedUsers;
    }
}