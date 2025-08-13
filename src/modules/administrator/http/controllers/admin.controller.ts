import * as request from 'supertest';
import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminLoginUsecase } from '../../infra/usecases/admin-login.usecase';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import {
  AdminLoginRequestDTO,
  AdminLoginResponseDTO,
} from '../../domain/dtos/requests/AdminLogin.request.dto';
import { AdminControllerInterface } from '../../domain/dtos/controllers/admin.controller.interface';
import { Request, Response } from 'express';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { InvalidCredentialsException } from '../../../user/domain/dtos/errors/InvalidCredentials.exception';

@ApiTags('Administradores')
@Controller('admin')
export class AdminController implements AdminControllerInterface {
  constructor(private readonly adminLoginUseCase: AdminLoginUsecase) {}

  @Post('/login')
  @ApiOkResponse({
    description: 'Login realizado com sucesso.',
    type: AdminLoginResponseDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Dados não processáveis.',
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: new InvalidCredentialsException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  async login(
    @Body() data: AdminLoginRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    if (req.user || req.administrator) {
      throw new UnauthorizedException('Usuário já autenticado.');
    }

    const result = await this.adminLoginUseCase.execute(data);

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
