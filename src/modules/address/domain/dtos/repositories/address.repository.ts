import { Address } from '@prisma/client';
import { EditAddressBodyDTO } from '../requests/EditAddress.request.dto';

export interface AddressRepositoryInterface {
  encryptedFields: (keyof Address)[];
  findById(id: string): Promise<Partial<Address> | null>;
  edit(id_address: string, data: EditAddressBodyDTO): Promise<Partial<Address>>;
  delete(id: string): Promise<boolean>;
}
