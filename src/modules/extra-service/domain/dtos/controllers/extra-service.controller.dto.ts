import { ExtraService } from '@prisma/client';
import { AllExceptionsFilterDTO } from '../../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { Request, Response } from 'express';

export interface ExtraServiceControllerInterface {
  browseExtraServices(req: Request, res: Response): Promise<Response>;
  findExtraServiceById(
    id: string,
    req: Request,
    res: Response,
  ): Promise<Response | AllExceptionsFilterDTO>;
}
