import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../../domain/dtos/repositories/user.repository';
import { User } from '../../../../../shared/infra/db/generated/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { prisma } from '../../../../../shared/infra/db/prisma';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  public encryptedFields: (keyof User)[] = [
    'email',
    'password',
    'phone_number',
  ];

  constructor(private encrypterProvider: EncrypterProvider) {}

  /* This method will find a single user using a given id */
  async findById(id: string): Promise<Partial<User> | null> {
    const user = await prisma.user.findUnique({
      where: {
        id_user: id,
      },
      select: {
        id_user: true,
        email: true,
        phone_number: true,
        name: true,
        createdAt: true,
        user_gym_plan: {
          select: {
            id_gym_plan: true,
            name: true,
            description: true,
            price: true,
            duration: true,
          },
        },
        address: {
          select: {
            id_address: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            city: true,
            uf: {
              select: {
                id: true,
                name: true,
                acronym: true,
                ibge_id: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    const decryptedUser = this.encrypterProvider.decryptData(
      user,
      this.encryptedFields as (keyof typeof user)[],
    );

    decryptedUser.address = this.encrypterProvider.decryptData(user.address, [
      'cep',
      'street',
      'number',
      'complement',
    ] as (keyof typeof user.address)[]);

    return decryptedUser;
  }

  /* This method will find a single user using a given email */
  async findByEmail(email: string): Promise<Partial<User> | null> {
    const encryptedEmail = this.encrypterProvider.encrypt({
      content: email,
    });

    const user = await prisma.user.findUnique({
      where: {
        email: encryptedEmail,
      },
      select: {
        id_user: true,
        email: true,
        phone_number: true,
        name: true,
        createdAt: true,
        user_gym_plan: {
          select: {
            id_gym_plan: true,
            name: true,
            description: true,
            price: true,
            duration: true,
          },
        },
        address: {
          select: {
            id_address: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            city: true,
            uf: {
              select: {
                id: true,
                name: true,
                acronym: true,
                ibge_id: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    const decryptedUser = this.encrypterProvider.decryptData(
      user,
      this.encryptedFields as (keyof typeof user)[],
    );

    decryptedUser.address = this.encrypterProvider.decryptData(user.address, [
      'cep',
      'street',
      'number',
      'complement',
    ] as (keyof typeof user.address)[]);

    return decryptedUser;
  }

  /* This method will find a single user using a given phonenumber */
  async findByPhoneNumber(phoneNumber: string): Promise<Partial<User> | null> {
    const encryptedPhoneNumber = this.encrypterProvider.encrypt({
      content: phoneNumber,
    });

    const user = await prisma.user.findUnique({
      where: {
        phone_number: encryptedPhoneNumber,
      },
      select: {
        id_user: true,
        email: true,
        phone_number: true,
        name: true,
        createdAt: true,
        user_gym_plan: {
          select: {
            id_gym_plan: true,
            name: true,
            description: true,
            price: true,
            duration: true,
          },
        },
        address: {
          select: {
            id_address: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            city: true,
            uf: {
              select: {
                id: true,
                name: true,
                acronym: true,
                ibge_id: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    const decryptedUser = this.encrypterProvider.decryptData(
      user,
      this.encryptedFields as (keyof typeof user)[],
    );

    decryptedUser.address = this.encrypterProvider.decryptData(user.address, [
      'cep',
      'street',
      'number',
      'complement',
    ] as (keyof typeof user.address)[]);

    return decryptedUser;
  }

  /* This method will find a list of users given a string */
  async findByUsername(username: string): Promise<Partial<User>[] | null> {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: username,
        },
      },
      select: {
        id_user: true,
        email: true,
        phone_number: true,
        name: true,
        createdAt: true,
        user_gym_plan: {
          select: {
            id_gym_plan: true,
            name: true,
            description: true,
            price: true,
            duration: true,
          },
        },
        address: {
          select: {
            id_address: true,
            cep: true,
            street: true,
            number: true,
            complement: true,
            city: true,
            uf: {
              select: {
                id: true,
                name: true,
                acronym: true,
                ibge_id: true,
              },
            },
          },
        },
      },
    });

    if (!users) {
      return null;
    }

    const decryptedUsers = users.map((user) =>
      this.encrypterProvider.decryptData(
        user,
        this.encryptedFields as (keyof typeof user)[],
      ),
    );

    decryptedUsers.forEach((user) => {
      if (user.address) {
        user.address = this.encrypterProvider.decryptData(user.address, [
          'cep',
          'street',
          'number',
          'complement',
        ] as (keyof typeof user.address)[]);
      }
    });

    return decryptedUsers;
  }

  /* This method will set a new password for a user */
  async setPassword(
    id: string,
    password: string,
  ): Promise<Partial<User> | null> {
    const encryptedPassword = this.encrypterProvider.encrypt({
      content: password,
    });

    const user = await prisma.user.update({
      where: {
        id_user: id,
      },
      data: {
        password: encryptedPassword,
      },
      select: {
        id_user: true,
        email: true,
        phone_number: true,
        name: true,
        createdAt: true,
      },
    });

    if (user) {
      const decryptedUser = this.encrypterProvider.decryptData(
        user,
        this.encryptedFields as (keyof typeof user)[],
      );

      return decryptedUser;
    }

    return null;
  }
}
