import { Request, Response } from 'express';

export interface TrainerControllerInterface {
  browseTrainers(req: Request, res: Response): Promise<Response>;
  findTrainerById(cuid: string, req: Request, res: Response): Promise<Response>;
}
