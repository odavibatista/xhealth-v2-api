import { Request, Response } from 'express';
import { AllExceptionsFilterDTO } from '../../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { CreateUserBodyDTO } from '../requests/CreateUser.request.dto';

export interface UserControllerInterface {
  createUser(
    req: Request,
    res: Response,
    createUserBody: CreateUserBodyDTO,
  ): Promise<{ token: string; id: string } | AllExceptionsFilterDTO>;
}
