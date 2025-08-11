import { Request, Response } from 'express';
import { AddPermissionRequestDTO } from '../requests/AddPermission.request.dto';

export interface AdminPermissionControllerInterface {
  addPermission(
    body: AddPermissionRequestDTO,
    req: Request,
    res: Response,
  ): Promise<Response>;
}
