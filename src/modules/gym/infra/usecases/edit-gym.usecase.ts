import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import {
  EditGymBodyDTO,
  EditGymResponseDTO,
} from '../../domain/dtos/requests/EditGym.request.dto';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { GymRepository } from '../db/repositories/gym.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { UserRepository } from '../../../user/infra/db/repositories/user.repository';
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';
import {
  validateAddress,
  validatePhone,
} from '../../../../shared/infra/utils/functions/validators';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../../user/domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { GymNameInUseException } from '../../domain/dtos/errors/GymNameInUseException.exception';

export class EditGymUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private readonly gymRepository: GymRepository,
    @Inject()
    private readonly administratorRepository: AdministratorRepository,
    @Inject()
    private readonly adminPermissionsRepository: AdminPermissionRepository,
    @Inject()
    private readonly addressRepository: AddressRepository,
    @Inject()
    private readonly userRepository: UserRepository,
    @Inject()
    private readonly ufRepository: UfRepository,
  ) {}
  async execute(
    id_gym: string,
    id_admin: string,
    data: EditGymBodyDTO,
  ): Promise<
    | EditGymResponseDTO
    | GymNameInUseException
    | GymNotFoundException
    | UnauthorizedException
    | AccountNotFoundException
    | UnprocessableDataException
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

    const isUFfValid = await this.ufRepository.findById(data.address.uf_id);

    if (!isUFfValid) throw new UFNotFoundException();

    const adminExists = await this.administratorRepository.findById(id_admin);

    if (!adminExists) throw new AccountNotFoundException();

    const hasPermission = await this.adminPermissionsRepository.hasPermission(
      id_admin,
      'can_edit_gyms',
    );

    if (!hasPermission) throw new UnauthorizedException();

    const gymExists = await this.gymRepository.findById(id_gym);

    if (!gymExists) throw new GymNotFoundException();

    if (data.phone_number !== gymExists.phone_number) {
      const isPhoneInUseByGym = await this.gymRepository.findByPhoneNumber(
        data.phone_number,
      );

      if (isPhoneInUseByGym) throw new PhoneNumberAlreadyRegisteredException();

      const isPhoneInUseByUser = await this.userRepository.findByPhoneNumber(
        data.phone_number,
      );

      if (isPhoneInUseByUser) throw new PhoneNumberAlreadyRegisteredException();
    }

    if (data.name !== gymExists.name) {
      const isNameInUse = await this.gymRepository.findByName(data.name);

      if (isNameInUse) throw new GymNameInUseException();
    }

    const edittedAddress = await this.addressRepository.edit(
      gymExists.address.id_address,
      data.address,
    );

    if (!edittedAddress)
      throw new UnprocessableDataException('Endereço inválido');

    const editedGym = await this.gymRepository.edit(id_gym, data);

    if (!editedGym) throw new GymNotFoundException();

    return {
      id_gym: editedGym.id_gym,
      name: editedGym.name,
      phone_number: editedGym.phone_number,
      imageUrl: editedGym.imageUrl,
      address: {
        id_address: edittedAddress.id_address,
        cep: edittedAddress.cep,
        street: edittedAddress.street,
        number: edittedAddress.number,
        complement: edittedAddress.complement,
        uf_id: edittedAddress.uf_id,
        city: edittedAddress.city,
      },
      created_at: String(editedGym.createdAt),
      updated_at: String(editedGym.updatedAt),
      created_by: id_admin,
    } as EditGymResponseDTO;
  }
}
