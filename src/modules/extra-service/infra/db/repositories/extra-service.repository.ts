import { ExtraService } from '@prisma/client';
import { ExtraServiceRepositoryInterface } from '../../../domain/dtos/repositories/extra-service.repository';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';

export class ExtraServiceRepository implements ExtraServiceRepositoryInterface {
  public encryptedFields: (keyof ExtraService)[] = ['price'];

  constructor(
    public encrypterProvider: EncrypterProvider
  ) {}

  async findById(id: string): Promise<ExtraService | null> {
    const extraService = await prisma.extraService.findUnique({
      where: { id_extra_service: id },
    });

    const decryptedExtraService = this.encrypterProvider.decryptData(
      extraService,
      this.encryptedFields as (keyof typeof extraService)[],
    );

    return decryptedExtraService;
  }
}
