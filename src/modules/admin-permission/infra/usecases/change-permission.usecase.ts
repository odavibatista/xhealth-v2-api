import { Inject, UnauthorizedException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import {
  ChangePermissionRequestDTO,
  ChangePermissionResponseDTO,
} from '../../domain/dtos/requests/ChangePermission.request.dto';

export class ChangePermissionUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private readonly permRepository: AdminPermissionRepository,
    @Inject()
    private readonly adminRepository: AdministratorRepository,
  ) {}

  async execute(
    data: ChangePermissionRequestDTO,
    requesting_admin_id: string,
  ): Promise<
    | ChangePermissionResponseDTO
    | AccountNotFoundException
    | UnauthorizedException
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

    if (hasPermission)
      await this.permRepository.removePermission(admin_id, permission);

    if (!hasPermission)
      await this.permRepository.addPermission(admin_id, permission);

    return {
      admin: {
        id_admin: admin_id,
        name: admin.name,
      },
      changed_permission: permission,
    };
  }
}
