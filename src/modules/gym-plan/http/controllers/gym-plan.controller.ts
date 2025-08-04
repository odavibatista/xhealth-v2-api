import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { GymPlanControllerInterface } from '../../domain/dtos/controllers/gym-plan-controller.dto';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BrowseGymPlansUsecase } from '../../infra/usecases/browse-gym-plans.usecase';
import { FindGymPlanByIdUsecase } from '../../infra/usecases/find-gym-plan-by-id.usecase';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';

@ApiTags('Planos de Academia')
@Controller('gym-plans')
export class GymPlanController implements GymPlanControllerInterface {
    constructor(
        private readonly browseGymPlansUsecase: BrowseGymPlansUsecase,
        private readonly findGymPlanByIdUsecase: FindGymPlanByIdUsecase,
    ) {}

    @Get('browse')
    @ApiOkResponse({
        description: 'Lista de planos trazida com sucesso.',
        type: [FindGymPlanByIDDto],
    })
      @ApiInternalServerErrorResponse({
        description: 'Erro interno do servidor.',
        type: AllExceptionsFilterDTO,
      })
    async browseGymPlans(@Req() req: Request, @Res() res: Response): Promise<Response> {
        const result = await this.browseGymPlansUsecase.execute();
        return res.status(200).json(result);
    }
}
