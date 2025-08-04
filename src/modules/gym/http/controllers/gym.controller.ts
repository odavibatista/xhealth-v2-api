import {
  Controller,
  Get,
  HttpException,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { GymControllerInterface } from '../../domain/dtos/controllers/gym-controller.interface';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BrowseGymsUsecase } from '../../infra/usecases/browse-gyms.usecase';
import { FindGymByIDDto } from '../../domain/dtos/requests/FindGymByID.request.dto';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { FindGymByIdUsecase } from '../../infra/usecases/find-gym-by-id.usecase';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';

@ApiTags('Academias')
@Controller('gyms')
export class GymController implements GymControllerInterface {
  constructor(
    private readonly browseGymsUsecase: BrowseGymsUsecase,
    private readonly findGymByIdUsecase: FindGymByIdUsecase,
  ) {}

  @ApiOkResponse({
    description: 'Lista de academias trazida com sucesso.',
    type: [FindGymByIDDto],
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  @Get('/browse')
  async browseGyms(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.browseGymsUsecase.execute();
    return res.status(200).json(result);
  }

  @ApiOkResponse({
    description: 'Academia encontrada com sucesso.',
    type: FindGymByIDDto,
  })
  @ApiNotFoundResponse({
    description: new GymNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  @Get('/find/:cuid')
  async findGymById(
    @Param('cuid') cuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.findGymByIdUsecase.execute(cuid);
    if (result instanceof HttpException)
      return res.status(result.getStatus()).json({
        message: result.message,
        status: result.getStatus(),
      });

    return res.status(200).json(result);
  }
}
