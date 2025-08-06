import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../../domain/dtos/repositories/User.repository';
import { User } from '../../../../../shared/infra/db/generated/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { AddressRepository } from '../../../../address/infra/db/repositories/address.repository';
import { CreateUserBodyDTO } from '../../../domain/dtos/requests/CreateUser.request.dto';
import { HashProvider } from '../../providers/hash.provider';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  public encryptedFields: (keyof User)[] = [
    'email',
    'password',
    'phone_number',
  ];

  constructor(
    private readonly hashProvider: HashProvider,
    private encrypterProvider: EncrypterProvider,
    private addressRepository: AddressRepository,
  ) {}

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
                id_uf: true,
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

    const decryptedAddress = this.encrypterProvider.decryptData(
      user.address,
      this.addressRepository.encryptedFields as (keyof typeof user.address)[],
    );

    decryptedUser.address = decryptedAddress;

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
                id_uf: true,
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

    const decryptedAddress = this.encrypterProvider.decryptData(
      user.address,
      this.addressRepository.encryptedFields as (keyof typeof user.address)[],
    );

    decryptedUser.address = decryptedAddress;

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
                id_uf: true,
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

    const decryptedAddress = this.encrypterProvider.decryptData(
      user.address,
      this.addressRepository.encryptedFields as (keyof typeof user.address)[],
    );

    decryptedUser.address = decryptedAddress;

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
                id_uf: true,
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

    const decryptedAddresses = users.map((user) =>
      this.encrypterProvider.decryptData(
        user.address,
        this.addressRepository.encryptedFields as (keyof typeof user.address)[],
      ),
    );

    decryptedUsers.forEach((user, index) => {
      user.address = decryptedAddresses[index];
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

  /* This method will create a new user */
  async create(data: CreateUserBodyDTO): Promise<Partial<User>> {
    const { check_privacy, address, gym_plan_id, ...userData } = data;

    const userEncryptedData = this.encrypterProvider.encryptData(
      userData,
      this.encryptedFields as (keyof typeof userData)[],
    );

    const { uf_id, ...addressToEncrypt } = address;

    const addressEncryptedData = this.encrypterProvider.encryptData(
      addressToEncrypt,
      this.addressRepository
        .encryptedFields as (keyof typeof addressToEncrypt)[],
    );

    const user = await prisma.user.create({
      data: {
        name: userEncryptedData.name,
        email: userEncryptedData.email,
        phone_number: userEncryptedData.phone_number,
        password: userEncryptedData.password,
        birth_date: userEncryptedData.birth_date,
        check_privacy: data.check_privacy,
        address: {
          create: {
            cep: addressEncryptedData.cep,
            street: addressEncryptedData.street,
            number: addressEncryptedData.number,
            complement: addressEncryptedData.complement,
            city: addressEncryptedData.city,
            uf: {
              connect: {
                id_uf: address.uf_id,
              },
            },
          },
        },
        user_gym_plan: {
          connect: {
            id_gym_plan: gym_plan_id,
          },
        },
      },
    });

    return this.encrypterProvider.decryptData(user, this.encryptedFields);
  }

  /* Method used to compare the user's password with a given password */
  async comparePassword(userId: string, givenPassword: string): Promise<boolean | null> {
    const user = await prisma.user.findUnique({
      where: {
        id_user: userId,
      }
    })

    if (!user) return null;

    const decryptedPassword = this.encrypterProvider.decrypt({
      content: user.password,
    });

    return this.hashProvider.compare(givenPassword, decryptedPassword);
  }
}
