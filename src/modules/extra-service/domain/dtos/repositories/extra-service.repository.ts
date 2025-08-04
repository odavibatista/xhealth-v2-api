import { ExtraService } from '@prisma/client';

export interface ExtraServiceRepositoryInterface {
  encryptedFields: (keyof ExtraService)[];

  findAll(): Promise<Partial<ExtraService>[]>;

  findById(id: string): Promise<Partial<ExtraService> | null>;
}
