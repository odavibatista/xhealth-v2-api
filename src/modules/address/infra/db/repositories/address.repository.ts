import { Injectable } from '@nestjs/common';
import { AddressRepositoryInterface } from '../../../domain/dtos/repositories/address.repository';
import { Address } from '@prisma/client';

@Injectable()
export class AddressRepository implements AddressRepositoryInterface {
  public encryptedFields: (keyof Address)[] = [
    'cep',
    'street',
    'number',
    'complement',
    'city',
  ];
}
