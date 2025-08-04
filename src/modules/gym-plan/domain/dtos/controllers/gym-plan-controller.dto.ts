import { Request, Response } from "express";

export interface GymPlanControllerInterface {
    browseGymPlans(req: Request, res: Response): Promise<Response>;
    //findGymPlanById(req: Request, res: Response): Promise<Response>;
}
