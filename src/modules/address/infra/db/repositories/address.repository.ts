import { Injectable } from '@nestjs/common';
import { AddressRepositoryInterface } from '../../../domain/dtos/repositories/address.repository';
import { Address } from '@prisma/client';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { EditAddressBodyDTO } from '../../../domain/dtos/requests/EditAddress.request.dto';

@Injectable()
export class AddressRepository implements AddressRepositoryInterface {
  public encryptedFields: (keyof Address)[] = [
    'cep',
    'street',
    'number',
    'complement',
    'city',
  ];

  constructor(private readonly encrypterProvider: EncrypterProvider) {}

  /* Finding by its id */
  async findById(id: string): Promise<Partial<Address> | null> {
    const address = await prisma.address.findUnique({
      where: { id_address: id },
      select: {
        id_address: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        city: true,
        uf_id: true,
      },
    });

    const decryptedAddress = this.encrypterProvider.decryptData(
      address,
      this.encryptedFields as (keyof typeof address)[],
    );

    return decryptedAddress;
  }

  /* Editing an address' data */
  async edit(id_address: string, data: EditAddressBodyDTO): Promise<Partial<Address>> {
    const encryptedData = this.encrypterProvider.encryptData(
      data,
      this.encryptedFields as (keyof typeof data)[],
    );

    const address = await prisma.address.update({
      where: { id_address },
      data: {
        ...encryptedData,
      },
      select: {
        id_address: true,
        cep: true,
        street: true,
        number: true,
        complement: true,
        city: true,
        uf_id: true,
      },
    });

    const decryptedAddress = this.encrypterProvider.decryptData(
      address,
      this.encryptedFields as (keyof typeof address)[],
    );

    return decryptedAddress;
  }

  /* Soft deleting an address */
  async delete(id: string): Promise<boolean> {
    const address = await prisma.address.update({
      where: { id_address: id },
      data: { deletedAt: new Date() },
    });

    return !!address;
  }
}
