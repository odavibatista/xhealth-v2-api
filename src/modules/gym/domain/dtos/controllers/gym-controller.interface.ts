import { Request, Response } from 'express';
import { CreateGymBodyDTO } from '../requests/CreateGym.request.dto';

export interface GymControllerInterface {
  browseGyms(req: Request, res: Response): Promise<Response>;
  findGymById(cuid: string, req: Request, res: Response): Promise<Response>;
  createGym(
    req: Request,
    res: Response,
    body: CreateGymBodyDTO,
  ): Promise<Response>;
  editGym(
    cuid: string,
    req: Request,
    res: Response,
    body: CreateGymBodyDTO,
  ): Promise<Response>;
  deleteGym(cuid: string, req: Request, res: Response): Promise<Response>;
}
