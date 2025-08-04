import { Request, Response } from 'express';

export interface GymControllerInterface {
  browseGyms(req: Request, res: Response): Promise<Response>;
  //findGymById(cuid: string, req: Request, res: Response): Promise<Response>;
}
