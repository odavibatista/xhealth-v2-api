import { Injectable } from '@nestjs/common';
import { PasswordRepositoryInterface } from '../../../domain/dtos/repositories/Password.repository';
import { PasswordHistory } from '@prisma/client';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import {
  CreatePasswordHistoryDTO,
  GetLastPasswordHashDTO,
} from '../../../domain/dtos/repositories/dtos/Password.repository.dto';
import { prisma } from '../../../../../shared/infra/db/prisma';

@Injectable()
export class PasswordRepository implements PasswordRepositoryInterface {
  public encryptedFields: (keyof PasswordHistory)[] = ['password'];

  constructor(private encrypterProvider: EncrypterProvider) {}

  async create({
    user_id,
    password,
  }: CreatePasswordHistoryDTO): Promise<PasswordHistory> {
    const dataToEncrypt = {
      user_id,
      password,
    };

    const encryptedData = this.encrypterProvider.encryptData(
      dataToEncrypt,
      this.encryptedFields as (keyof typeof dataToEncrypt)[],
    );

    const register = await prisma.passwordHistory.create({
      data: encryptedData,
    });

    return this.encrypterProvider.decryptData(register, this.encryptedFields);
  }

  async getByUserId({
    user_id,
    count = 0,
  }: GetLastPasswordHashDTO): Promise<PasswordHistory[]> {
    const data = await prisma.passwordHistory.findMany({
      where: {
        user_id,
      },
      take: count,
      orderBy: {
        created_at: 'desc',
      },
    });

    const dataDecrypted = data.map((item) => {
      return this.encrypterProvider.decryptData(item, this.encryptedFields);
    });

    return dataDecrypted;
  }
}
