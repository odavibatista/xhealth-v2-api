import {
  Controller,
  Get,
  HttpException,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { ExtraServiceControllerInterface } from '../../domain/dtos/controllers/extra-service.controller.dto';
import { Request, Response } from 'express';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { FindExtraServiceUsecase } from '../../infra/usecases/find-extra-service.usecase';
import {
  ApiFoundResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FindExtraServiceByIdDto } from '../../domain/dtos/requests/FindExtraServiceById.request.dto';

@ApiTags('Serviços Extras')
@Controller('service')
export class ExtraServiceController implements ExtraServiceControllerInterface {
  constructor(
    private readonly findExtraServiceUsecase: FindExtraServiceUsecase,
  ) {}

  @ApiFoundResponse({
    description: 'Serviço localizado com sucesso!',
    type: FindExtraServiceByIdDto,
  })
  @ApiNotFoundResponse({
    description: 'Serviço não encontrado!',
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  @Get(':cuid')
  async findExtraServiceById(
    @Param('cuid') id: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response | AllExceptionsFilterDTO> {
    const result = await this.findExtraServiceUsecase.execute(id);

    if (result instanceof HttpException) {
      return res.status(result.getStatus()).json({
        message: result.message,
        status: result.getStatus(),
      });
    } else {
      return res.status(200).json(result);
    }
  }
}
