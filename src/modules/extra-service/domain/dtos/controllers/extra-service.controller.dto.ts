import { ExtraService } from '@prisma/client';
import { AllExceptionsFilterDTO } from '../../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { Request, Response } from 'express';

export interface ExtraServiceControllerInterface {
  findExtraServiceById(
    id: string,
    req: Request,
    res: Response,
  ): Promise<Response | AllExceptionsFilterDTO>;
}
