import { Inject, UnauthorizedException } from '@nestjs/common';
import { GymRepository } from '../db/repositories/gym.repository';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import {
  CreateGymBodyDTO,
  CreateGymResponseDTO,
} from '../../domain/dtos/requests/CreateGym.request.dto';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import {
  validateAddress,
  validatePhone,
} from '../../../../shared/infra/utils/functions/validators';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { PhoneNumberAlreadyRegisteredException } from '../../../user/domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';

export class CreateGymUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private readonly gymRepository: GymRepository,
    @Inject()
    private readonly administratorRepository: AdministratorRepository,
    @Inject()
    private readonly adminPermissionsRepository: AdminPermissionRepository,
    @Inject()
    private readonly addressRepository: AddressRepository,
  ) {}

  async execute(
    data: CreateGymBodyDTO,
    administrator_id: string,
  ): Promise<
    | CreateGymResponseDTO
    | UnauthorizedException
    | AccountNotFoundException
    | UnprocessableDataException
    | PhoneNumberAlreadyRegisteredException
  > {
    validateAddress({
      cep: data.address.cep,
      street: data.address.street,
      number: data.address.number,
      city: data.address.city,
      uf: Number(data.address.uf_id),
    });
    const isPhoneValid = validatePhone(data.phone_number);

    if (!isPhoneValid) 
      throw new UnprocessableDataException('Número de telefone inválido');
    
    const adminExists =
      await this.administratorRepository.findById(administrator_id);

    if (!adminExists) throw new AccountNotFoundException();

    const isPhoneInUse = await this.gymRepository.findByPhoneNumber(
      data.phone_number,
    );

    if (isPhoneInUse) 
      throw new PhoneNumberAlreadyRegisteredException();

    const hasPermission = await this.adminPermissionsRepository.hasPermission(
      administrator_id,
      'can_create_gyms',
    );

    if (!hasPermission)
      throw new UnauthorizedException(
        'Você não tem permissão para criar academias.',
      );

    const gym = await this.gymRepository.create(
      {
        name: data.name,
        phone_number: data.phone_number,
        imageUrl: data.imageUrl,
        address: {
          cep: data.address.cep,
          street: data.address.street,
          number: data.address.number,
          complement: data.address.complement,
          uf_id: data.address.uf_id,
          city: data.address.city,
        },
      },
      administrator_id,
    );
    const address = await this.addressRepository.findById(gym.address.id_address);

    return {
      id_gym: gym.id_gym,
      name: gym.name,
      imageUrl: gym.imageUrl,
      phone_number: gym.phone_number,
      address: {
        id_address: address?.id_address,
        cep: address?.cep,
        street: address?.street,
        number: address?.number,
        complement: address?.complement,
        uf_id: address?.uf_id,
        city: address?.city,
      },
      created_by: administrator_id,
      created_at: gym.created_at,
      updated_at: gym.updated_at,
    } as CreateGymResponseDTO;
  }
}
