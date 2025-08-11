import { AdministratorPermission } from '@prisma/client';
import { AdminPermissionRepositoryInterface } from '../../../domain/dtos/repositories/admin-permission.repository.interface';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from '@nestjs/common';
import { AdminAlreadyHasPermissionException } from '../../../domain/dtos/errors/AdminAlreadyHasPermission.exception.dto';

@Injectable()
export class AdminPermissionRepository
  implements AdminPermissionRepositoryInterface
{
  public encryptedFields: (keyof AdministratorPermission)[] = [];

  constructor() {}

  async addPermission(adminId: string, permission: string): Promise<boolean> {
    const adminPermission = await prisma.administratorPermission.findUnique({
      where: {
        id_administrator_permission: adminId,
      },
      include: {
        administrator: true,
      },
    });

    if (!adminPermission) return false;

    if (adminPermission[permission as keyof AdministratorPermission] === true)
      throw new AdminAlreadyHasPermissionException();

    await prisma.administratorPermission.update({
      where: {
        id_administrator_permission: adminId,
      },
      data: {
        [permission]: true,
      },
    });

    return true;
  }
}
