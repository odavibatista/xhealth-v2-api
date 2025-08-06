import { Request, Response } from 'express';
import { AdminLoginRequestDTO } from '../requests/AdminLogin.request.dto';

export interface AdminControllerInterface {
  login(
    data: AdminLoginRequestDTO,
    req: Request,
    res: Response,
  ): Promise<Response>;
}
