import {
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { TrainerControllerInterface } from '../../domain/dtos/controllers/trainer-controller.interface';
import { BrowseTrainersUsecase } from '../../infra/usecases/browse-trainers.usecase';
import { FindTrainerByIdUsecase } from '../../infra/usecases/find-trainer-by-id.usecase';
import { Cache } from '@nestjs/cache-manager';
import { Request, Response } from 'express';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { FindTrainerByIDDto } from '../../domain/dtos/requests/FindTrainerByID.request.dto';
import { TrainerNotFoundException } from '../../domain/dtos/errors/TrainerNotFound.exception';

@ApiTags('Trainers')
@Controller('trainers')
export class TrainerController implements TrainerControllerInterface {
  constructor(
    private readonly browseTrainersUseCase: BrowseTrainersUsecase,
    private readonly findTrainerByIdUsecase: FindTrainerByIdUsecase,
    @Inject('CACHE_MANAGER')
    private readonly cacheManager: Cache,
  ) {}

  @ApiOkResponse({
    description: 'Lista de treinadores trazida com sucesso.',
    type: [FindTrainerByIDDto],
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  @Get('/browse')
  async browseTrainers(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const cachedTrainers = await this.cacheManager.get('trainers');

    if (cachedTrainers) return res.status(200).json(cachedTrainers);

    const result = await this.browseTrainersUseCase.execute();

    if (!cachedTrainers) await this.cacheManager.set('trainers', result);

    return res.status(200).json(result);
  }

  @Get('/find/:cuid')
  @ApiOkResponse({
    description: 'Treinador encontrado com sucesso.',
    type: FindTrainerByIDDto,
  })
  @ApiNotFoundResponse({
    description: new TrainerNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  async findTrainerById(
    @Param('cuid') cuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const cachedTrainer = await this.cacheManager.get(`trainer-${cuid}`);

    if (cachedTrainer) return res.status(200).json(cachedTrainer);

    const result = await this.findTrainerByIdUsecase.execute(cuid);

    if (result instanceof HttpException)
      return res.status(result.getStatus()).json({
        message: result.message,
        status: result.getStatus(),
      });

    if (!cachedTrainer) await this.cacheManager.set(`trainer-${cuid}`, result);

    return res.status(200).json(result);
  }
}
