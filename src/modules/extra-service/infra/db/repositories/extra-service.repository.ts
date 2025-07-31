import { ExtraService } from '@prisma/client';
import { ExtraServiceRepositoryInterface } from '../../../domain/dtos/repositories/extra-service.repository';

export class ExtraServiceRepository implements ExtraServiceRepositoryInterface {
  public encryptedFields: (keyof ExtraService)[] = [];
}
