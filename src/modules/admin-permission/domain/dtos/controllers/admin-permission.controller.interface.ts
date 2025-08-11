import { Request, Response } from 'express';
import { AddPermissionRequestDTO } from '../requests/AddPermission.request.dto';
import { ChangePermissionRequestDTO } from '../requests/ChangePermission.request.dto';
import { RemovePermissionRequestDTO } from '../requests/RemovePermission.request.dto';

export interface AdminPermissionControllerInterface {
  addPermission(
    body: AddPermissionRequestDTO,
    req: Request,
    res: Response,
  ): Promise<Response>;
  changePermission(
    body: ChangePermissionRequestDTO,
    req: Request,
    res: Response,
  ): Promise<Response>;
  removePermission(
    body: RemovePermissionRequestDTO,
    req: Request,
    res: Response,
  ): Promise<Response>;
}
