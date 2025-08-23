import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { UserControllerInterface } from '../../domain/dtos/controllers/user.controller.dto';
import { CreateUserUseCase } from '../../infra/usecases/create-user.usecase';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';
import {
  CreateUserBodyDTO,
  CreateUserResponseDTO,
} from '../../domain/dtos/requests/CreateUser.request.dto';
import { Request, Response } from 'express';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { GymPlanNotFoundException } from '../../../gym-plan/domain/dtos/errors/GymPlanNotFound.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { EmailAlreadyRegisteredException } from '../../domain/dtos/errors/EmailAlreadyRegistered.exception';
import {
  UserLoginRequestDTO,
  UserLoginResponseDTO,
} from '../../domain/dtos/requests/UserLogin.request.dto';
import { UserLoginUsecase } from '../../infra/usecases/user-login.usecase';
import { InvalidCredentialsException } from '../../domain/dtos/errors/InvalidCredentials.exception';

@Controller('user')
@ApiTags('Usuário')
export class UserController implements UserControllerInterface {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly userLoginUseCase: UserLoginUsecase,
  ) {}

  @Post('register')
  @ApiCreatedResponse({
    description: 'Usuário cadastrado com sucesso!',
    type: CreateUserResponseDTO,
  })
  @ApiNotFoundResponse({
    description: new UFNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiNotFoundResponse({
    description: new GymPlanNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: 'Usuário não autorizado.',
    type: AllExceptionsFilterDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: new UnprocessableDataException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: new PhoneNumberAlreadyRegisteredException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: new EmailAlreadyRegisteredException().message,
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

  @Post('login')
  @ApiOkResponse({
    description: 'Usuário logado com sucesso!',
    type: UserLoginResponseDTO,
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
    @Body() data: UserLoginRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    if (req.user || req.administrator) {
      throw new UnauthorizedException('Usuário já autenticado.');
    }

    const userIp = (req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress) as string;

    const result = await this.userLoginUseCase.execute(data, userIp);

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
