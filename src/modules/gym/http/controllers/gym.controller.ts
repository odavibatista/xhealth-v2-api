import { Controller, Get, Req, Res } from '@nestjs/common';
import { GymControllerInterface } from '../../domain/dtos/controllers/gym-controller.interface';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { BrowseGymsUsecase } from '../../infra/usecases/browse-gyms.usecase';
import { FindGymByIDDto } from '../../domain/dtos/requests/FindGymByID.request.dto';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';

@ApiTags('Academias')
@Controller('gyms')
export class GymController implements GymControllerInterface {
  constructor(private readonly browseGymsUsecase: BrowseGymsUsecase) {}

  @ApiOkResponse({
    description: 'Lista de planos trazida com sucesso.',
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
}
