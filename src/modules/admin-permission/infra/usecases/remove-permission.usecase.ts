import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import {
  RemovePermissionRequestDTO,
  RemovePermissionResponseDTO,
} from '../../domain/dtos/requests/RemovePermission.request.dto';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { PermissionAlreadySetException } from '../../domain/dtos/errors/PermissionAlreadySet.exception.dto';

export class RemovePermissionUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private readonly permRepository: AdminPermissionRepository,
    @Inject()
    private readonly adminRepository: AdministratorRepository,
  ) {}
  async execute(
    data: RemovePermissionRequestDTO,
    requesting_admin_id: string,
  ): Promise<
    | RemovePermissionResponseDTO
    | AccountNotFoundException
    | UnauthorizedException
    | PermissionAlreadySetException
  > {
    if (requesting_admin_id === data.admin_id)
      throw new UnauthorizedException();

    const requestingAdmin =
      await this.adminRepository.findById(requesting_admin_id);

    if (!requestingAdmin) throw new UnauthorizedException();

    const requestingHasPermission = await this.permRepository.hasPermission(
      requesting_admin_id,
      'can_edit_administrators',
    );

    if (!requestingHasPermission) throw new UnauthorizedException();

    const { admin_id, permission } = data;

    const admin = await this.adminRepository.findById(admin_id);

    if (!admin || !admin.name) throw new AccountNotFoundException();

    const hasPermission = await this.permRepository.hasPermission(
      admin_id,
      permission,
    );

    if (!hasPermission) throw new PermissionAlreadySetException();
    
    const removed = await this.permRepository.removePermission(
      admin_id,
      permission,
    );

    if (!removed) throw new PermissionAlreadySetException();

    return {
      admin: {
        id_admin: admin_id,
        name: admin.name,
      },
      removed_permission: permission,
    };
  }
}
