import { AdministratorPermission } from '@prisma/client';
import { AdminAlreadyHasPermissionException } from '../errors/AdminAlreadyHasPermission.exception.dto';
import { PermissionDoesNotExistException } from '../errors/PermissionDoesNotExist.exception.dto';

export interface AdminPermissionRepositoryInterface {
  encryptedFields: (keyof AdministratorPermission)[];
  findByAdminId(adminId: string): Promise<Partial<AdministratorPermission> | null>;

  addPermission(
    adminId: string,
    permission: string,
  ): Promise<boolean | AdminAlreadyHasPermissionException>;
  
  removePermission(adminId: string, permission: string): Promise<boolean>;
  
  hasPermission(adminId: string, permission: string): Promise<boolean | PermissionDoesNotExistException>;
}
