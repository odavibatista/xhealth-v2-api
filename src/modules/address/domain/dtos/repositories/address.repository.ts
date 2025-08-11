import { Address } from '@prisma/client';

export interface AddressRepositoryInterface {
  encryptedFields: (keyof Address)[];
  findById(id: string): Promise<Partial<Address> | null>;
}
