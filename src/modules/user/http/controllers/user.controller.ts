import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags, ApiUnauthorizedResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { UserControllerInterface } from '../../domain/dtos/controllers/user.controller.dto';
import { CreateUserUseCase } from '../../infra/usecases/create-user.usecase';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { CreateUserBodyDTO, CreateUserResponseDTO } from '../../domain/dtos/requests/CreateUser.request.dto';
import { Request, Response } from 'express';

@Controller('user')
@ApiTags('Usuário')
export class UserController implements UserControllerInterface {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('create')
    @ApiCreatedResponse({
    description: 'Usuário cadastrado com sucesso!',
    type: CreateUserResponseDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuário não autorizado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Dados não processáveis.',
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: 'Número de telefone já cadastrado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: 'E-mail já cadastrado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro interno do servidor.',
    type: AllExceptionsFilterDTO,
  })
  async createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createUserBody: CreateUserBodyDTO,
  ): Promise<Response | AllExceptionsFilterDTO> {
    if (req.user) {
      throw new UnauthorizedException('Usuário já autenticado.');
    }

    const result = await this.createUserUseCase.execute(createUserBody);

    if (result instanceof HttpException) {
      return res.status(result.getStatus()).json({
        message: result.message,
        status: result.getStatus(),
      });
    } else {
      return res.status(201).json(result);
    }
    
  }
}
