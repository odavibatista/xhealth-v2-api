import { AdministratorPermission } from '@prisma/client';
import { AdminAlreadyHasPermissionException } from '../errors/AdminAlreadyHasPermission.exception.dto';

export interface AdminPermissionRepositoryInterface {
  encryptedFields: (keyof AdministratorPermission)[];
  addPermission(
    adminId: string,
    permission: string,
  ): Promise<boolean | AdminAlreadyHasPermissionException>;
  // removePermission(adminId: string, permission: string): Promise<boolean>;
  // hasPermission(adminId: string, permission: string): Promise<boolean>;
}
