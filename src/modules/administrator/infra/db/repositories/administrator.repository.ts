import { Administrator } from '@prisma/client';
import { AdministratorRepositoryInterface } from '../../../domain/dtos/repositories/administrator.repository';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { HashProvider } from '../../../../user/infra/providers/hash.provider';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdministratorRepository
  implements AdministratorRepositoryInterface
{
  public encryptedFields: (keyof Administrator)[] = [
    'password',
    'email',
    'name',
  ];

  constructor(
    private readonly encrypterProvider: EncrypterProvider,
    private readonly hashProvider: HashProvider,
  ) {}

  async findById(id: string): Promise<Partial<Administrator> | null> {
    const admin = await prisma.administrator.findUnique({
      where: {
        id_administrator: id,
      },
      select: {
        id_administrator: true,
        email: true,
        name: true,
        role: true,
        created_at: true,
      },
    });

    if (!admin) return null;

    const decryptedAdmin = this.encrypterProvider.decryptData(
      admin,
      this.encryptedFields as (keyof typeof admin)[],
    );

    return decryptedAdmin;
  }

  async findByEmail(email: string): Promise<Partial<Administrator> | null> {
    const encryptedEmail = this.encrypterProvider.encrypt({
      content: email,
    });

    const admin = await prisma.administrator.findUnique({
      where: {
        email: encryptedEmail,
      },
      select: {
        id_administrator: true,
        email: true,
        name: true,
        role: true,
        created_at: true,
      },
    });

    if (!admin) return null;

    const decryptedAdmin = this.encrypterProvider.decryptData(
      admin,
      this.encryptedFields as (keyof typeof admin)[],
    );

    return decryptedAdmin;
  }

  async comparePassword(
    adminId: string,
    givenPassword: string,
  ): Promise<boolean | null> {
    const admin = await prisma.administrator.findUnique({
      where: {
        id_administrator: adminId,
      },
    });

    if (!admin) return null;

    const decryptedPassword = this.encrypterProvider.decrypt({
      content: admin.password,
    });

    const isPasswordValid = await this.hashProvider.compare(
      givenPassword,
      decryptedPassword,
    );

    return isPasswordValid;
  }
}
