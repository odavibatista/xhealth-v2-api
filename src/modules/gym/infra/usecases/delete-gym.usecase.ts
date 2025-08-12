import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { GymRepository } from '../db/repositories/gym.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';

export class DeleteGymUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private readonly gymRepository: GymRepository,
    @Inject()
    private readonly addressRepository: AddressRepository,
    @Inject()
    private readonly adminRepo: AdministratorRepository,
    @Inject()
    private readonly adminPermissionRepo: AdminPermissionRepository,
  ) {}
  async execute(
    id_gym: string,
    admin_id: string,
  ): Promise<
    | boolean
    | UnauthorizedException
    | AccountNotFoundException
    | GymNotFoundException
  > {
    const adminExists = await this.adminRepo.findById(admin_id);

    if (!adminExists) throw new AccountNotFoundException();

    const hasPermission = await this.adminPermissionRepo.hasPermission(
      admin_id,
      'can_delete_gyms',
    );

    if (!hasPermission)
      throw new UnauthorizedException(
        'Você não tem permissão para deletar academias.',
      );

    const gym = await this.gymRepository.findById(id_gym);

    if (!gym) throw new GymNotFoundException();

    const addressDeleted = await this.addressRepository.delete(
      gym.address.id_address,
    );

    const gymDeleted = await this.gymRepository.delete(id_gym);

    return addressDeleted && gymDeleted;
  }
}
