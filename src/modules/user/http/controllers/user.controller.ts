import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserControllerInterface } from '../../domain/dtos/controllers/user.controller.dto';
import { CreateUserUseCase } from '../../infra/usecases/create-user.usecase';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import { CreateUserBodyDTO, CreateUserResponseDTO } from '../../domain/dtos/requests/CreateUser.request.dto';
import { Request, Response } from 'express';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { EmailAlreadyRegisteredException } from '../../domain/dtos/errors/EmailAlreadyRegistered.exception';

@Controller('user')
@ApiTags('Usuário')
export class UserController implements UserControllerInterface {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('create')
    @ApiCreatedResponse({
    description: 'Usuário cadastrado com sucesso!',
    type: CreateUserResponseDTO,
  })
  @ApiResponse({
    status: new UnauthorizedException().getStatus(),
    description: 'Usuário não autorizado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiResponse({
    status: new UnprocessableDataException().getStatus(),
    description: 'Dados não processáveis.',
    type: AllExceptionsFilterDTO,
  })
  @ApiResponse({
    status: new PhoneNumberAlreadyRegisteredException().getStatus(),
    description: 'Número de telefone já cadastrado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiResponse({
    status: new EmailAlreadyRegisteredException().getStatus(),
    description: 'E-mail já cadastrado.',
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
