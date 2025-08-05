import {
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { GymPlanControllerInterface } from '../../domain/dtos/controllers/gym-plan-controller.dto';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BrowseGymPlansUsecase } from '../../infra/usecases/browse-gym-plans.usecase';
import { FindGymPlanByIdUsecase } from '../../infra/usecases/find-gym-plan-by-id.usecase';
import { FindGymPlanByIDDto } from '../../domain/dtos/requests/FindGymPlanByID.request.dto';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { GymPlanNotFoundException } from '../../domain/dtos/errors/GymPlanNotFound.exception';
import { Cache } from '@nestjs/cache-manager';

@ApiTags('Planos de Academia')
@Controller('gym-plans')
export class GymPlanController implements GymPlanControllerInterface {
  constructor(
    private readonly browseGymPlansUsecase: BrowseGymPlansUsecase,
    private readonly findGymPlanByIdUsecase: FindGymPlanByIdUsecase,
    @Inject('CACHE_MANAGER')
    private readonly cacheManager: Cache,
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
  async browseGymPlans(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const cachedGymPlans = await this.cacheManager.get('gym-plans');

    if (cachedGymPlans) return res.status(200).json(cachedGymPlans);

    const result = await this.browseGymPlansUsecase.execute();
    return res.status(200).json(result);
  }

  @Get('/find/:cuid')
  @ApiOkResponse({
    description: 'Plano encontrado com sucesso.',
    type: FindGymPlanByIDDto,
  })
  @ApiNotFoundResponse({
    description: new GymPlanNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  async findGymPlanById(
    @Param('cuid') cuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const cachedGymPlan = await this.cacheManager.get(`gym-plan-${cuid}`);

    if (cachedGymPlan) return res.status(200).json(cachedGymPlan);

    const result = await this.findGymPlanByIdUsecase.execute(cuid);
    if (result instanceof HttpException) {
      return res.status(404).json(result);
    }
    return res.status(200).json(result);
  }
}
