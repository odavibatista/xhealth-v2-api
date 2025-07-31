import { Address } from '@prisma/client';

export interface AddressRepositoryInterface {
  encryptedFields: (keyof Address)[];
}
