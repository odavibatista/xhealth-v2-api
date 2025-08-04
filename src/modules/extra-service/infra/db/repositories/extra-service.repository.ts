import { ExtraService } from '@prisma/client';
import { ExtraServiceRepositoryInterface } from '../../../domain/dtos/repositories/extra-service.repository';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExtraServiceRepository implements ExtraServiceRepositoryInterface {
  public encryptedFields: (keyof ExtraService)[] = ['price'];

  constructor(public encrypterProvider: EncrypterProvider) {}

  /* Used to find all the Services */
  async findAll(): Promise<Partial<ExtraService>[]> {
    const extraServices = await prisma.extraService.findMany({
      select: {
        id_extra_service: true,
        name: true,
        description: true,
        price: true,
        imageUrl: true,
        createdAt: true,
      },
    });

    if (!extraServices || extraServices.length === 0) {
      return [];
    }

    return extraServices?.map((extraService) =>
      this.encrypterProvider.decryptData(
        extraService,
        this.encryptedFields as (keyof typeof extraService)[],
      ),
    );
  }

  /* Used to find a single Service */
  async findById(id: string): Promise<Partial<ExtraService> | null> {
    const extraService = await prisma.extraService.findUnique({
      where: { id_extra_service: id },
      omit: {
        created_by: true,
      },
    });

    if (!extraService) return null;

    const decryptedExtraService = this.encrypterProvider.decryptData(
      extraService,
      this.encryptedFields as (keyof typeof extraService)[],
    );

    return decryptedExtraService;
  }
}
