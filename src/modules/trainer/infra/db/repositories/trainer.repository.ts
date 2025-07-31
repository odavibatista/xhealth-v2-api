import { Injectable } from '@nestjs/common';
import { TrainerRepositoryInterface } from '../../../domain/dtos/repositories/trainer.repository';
import { Trainer } from '@prisma/client';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';

@Injectable()
export class TrainerRepository implements TrainerRepositoryInterface {
  public encryptedFields: (keyof Trainer)[] = [
    'name',
    'instagram',
    'twitter',
    'youtube',
  ];

  constructor(private encrypterProvider: EncrypterProvider) {}

  async findById(id: string): Promise<Partial<Trainer> | null> {
    const trainer = await prisma.trainer.findUnique({
      where: {
        id_trainer: id,
      },

      select: {
        id_trainer: true,
        name: true,
        instagram: true,
        twitter: true,
        youtube: true,
        createdAt: true,
      },
    });

    if (!trainer) {
      return null;
    }

    const decryptedTrainer = this.encrypterProvider.decryptData(
      trainer,
      this.encryptedFields as (keyof typeof trainer)[],
    );

    return decryptedTrainer;
  }

  async findByName(name: string): Promise<Partial<Trainer>[] | null> {
    const trainers = await prisma.trainer.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      select: {
        id_trainer: true,
        name: true,
        instagram: true,
        twitter: true,
        youtube: true,
        createdAt: true,
      },
    });

    if (!trainers || trainers.length === 0) {
      return null;
    }

    return trainers.map((trainer) =>
      this.encrypterProvider.decryptData(
        trainer,
        this.encryptedFields as (keyof typeof trainer)[],
      ),
    );
  }
}
