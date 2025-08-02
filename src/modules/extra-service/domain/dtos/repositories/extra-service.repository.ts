import { ExtraService } from '@prisma/client';

export interface ExtraServiceRepositoryInterface {
  encryptedFields: (keyof ExtraService)[];

  findById(id: string): Promise<Partial<ExtraService> | null>;
}
