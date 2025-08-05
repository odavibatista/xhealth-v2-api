import { Injectable } from '@nestjs/common';
import { TrainerRepositoryInterface } from '../../../domain/dtos/repositories/trainer.repository';
import { Trainer } from '@prisma/client';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { prisma } from '../../../../../shared/infra/db/prisma';

@Injectable()
export class TrainerRepository implements TrainerRepositoryInterface {
  //@ts-ignore
  public encryptedFields: (keyof Trainer)[] = [
    'name',
    'instagram',
    'twitter',
    'youtube',
    'imageUrl',
  ];

  constructor(private encrypterProvider: EncrypterProvider) {}
  /* This method will find all trainers */
  async findAll(): Promise<Partial<Trainer>[] | null> {
    const trainers = await prisma.trainer.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id_trainer: true,
        name: true,
        instagram: true,
        twitter: true,
        youtube: true,
        imageUrl: true,
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

  /* This method will find a single trainer by its id */
  async findById(id: string): Promise<Partial<Trainer> | null> {
    const trainer = await prisma.trainer.findUnique({
      where: {
        id_trainer: id,
        deletedAt: null,
      },

      select: {
        id_trainer: true,
        name: true,
        instagram: true,
        twitter: true,
        youtube: true,
        imageUrl: true,
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

  /* This method will find trainers by their name */
  async findByName(name: string): Promise<Partial<Trainer>[] | null> {
    const trainers = await prisma.trainer.findMany({
      where: {
        name: {
          contains: name,
        },
        deletedAt: null,
      },
      select: {
        id_trainer: true,
        name: true,
        instagram: true,
        twitter: true,
        youtube: true,
        imageUrl: true,
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
