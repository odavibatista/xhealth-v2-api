import { AdministratorPermission } from '@prisma/client';
import { AdminPermissionRepositoryInterface } from '../../../domain/dtos/repositories/admin-permission.repository.interface';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { Injectable } from '@nestjs/common';
import { AdminAlreadyHasPermissionException } from '../../../domain/dtos/errors/AdminAlreadyHasPermission.exception.dto';
import { PermissionDoesNotExistException } from '../../../domain/dtos/errors/PermissionDoesNotExist.exception.dto';

@Injectable()
export class AdminPermissionRepository
  implements AdminPermissionRepositoryInterface
{
  public encryptedFields: (keyof AdministratorPermission)[] = [];

  constructor() {}

  /* Buscar permissões por ID do administrador */
  async findByAdminId(adminId: string): Promise<Partial<AdministratorPermission> | null> {
    const adminPermission = await prisma.administratorPermission.findUnique({
      where: {
        id_administrator_permission: adminId,
        deletedAt: null,
      },
      omit: {
        created_at: true,
        updated_at: true,
      }
    });

    if (!adminPermission) return null;

    return adminPermission;
  }

  /* Remover uma permissão */
  async removePermission(adminId: string, permission: string): Promise<boolean> {
    const adminPermission = await prisma.administratorPermission.findUnique({
      where: {
        id_administrator_permission: adminId,
      },
    });

    if (!adminPermission) return false;

    if (adminPermission[permission as keyof AdministratorPermission] === false)
      return false;

    await prisma.administratorPermission.update({
      where: {
        id_administrator_permission: adminId,
      },
      data: {
        [permission]: false,
      },
    });

    return true;
  }

  /* Adicionar uma permissão */
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

  /* Verifica se o usuário possui a permissão */
  async hasPermission(adminId: string, permission: string): Promise<boolean> {
    const adminPermission = await prisma.administratorPermission.findUnique({
      where: {
        id_administrator_permission: adminId,
      },
    });

    if (!adminPermission) throw new PermissionDoesNotExistException();

    return adminPermission[permission as keyof AdministratorPermission] === true;
  }
}
