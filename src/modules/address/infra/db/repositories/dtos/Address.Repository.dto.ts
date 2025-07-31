import { Address } from '@prisma/client';

export interface CreateAddressDTO
  extends Omit<Address, 'id' | 'created_at' | 'updated_at'> {}
