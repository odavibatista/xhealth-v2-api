import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AdminPermissionControllerInterface } from '../../domain/dtos/controllers/admin-permission.controller.interface';
import { AddPermissionUsecase } from '../../infra/usecases/add-permission.usecase';
import { AddPermissionRequestDTO } from '../../domain/dtos/requests/AddPermission.request.dto';
import { Request, Response } from 'express';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { RemovePermissionUsecase } from '../../infra/usecases/remove-permission.usecase';
import { ChangePermissionUsecase } from '../../infra/usecases/change-permission.usecase';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { PermissionAlreadySetException } from '../../domain/dtos/errors/PermissionAlreadySet.exception.dto';
import {
  ChangePermissionRequestDTO,
  ChangePermissionResponseDTO,
} from '../../domain/dtos/requests/ChangePermission.request.dto';
import {
  RemovePermissionRequestDTO,
  RemovePermissionResponseDTO,
} from '../../domain/dtos/requests/RemovePermission.request.dto';
import { PermissionDoesNotExistException } from '../../domain/dtos/errors/PermissionDoesNotExist.exception.dto';
import { AllExceptionsFilterDTO } from '../../../../shared/domain/dtos/errors/AllException.filter.dto';

@ApiTags('Permissões de Administradores')
@Controller('permissions')
export class AdminPermissionController
  implements AdminPermissionControllerInterface
{
  constructor(
    private readonly addPermUsecase: AddPermissionUsecase,
    private readonly changePermUsecase: ChangePermissionUsecase,
    private readonly removePermUsecase: RemovePermissionUsecase,
  ) {}

  /* Adding permissions to an admin */
  @Post('/add')
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({
    description: 'Permissão adicionada com sucesso.',
    type: ChangePermissionResponseDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: new PermissionDoesNotExistException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiNotFoundResponse({
    description: new AccountNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: new PermissionAlreadySetException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: AllExceptionsFilterDTO,
  })
  async addPermission(
    @Body() body: AddPermissionRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    if (!req.administrator) throw new UnauthorizedException();

    const result = await this.addPermUsecase.execute(
      body,
      req.administrator.id,
    );

    if (result instanceof HttpException)
      return res.status(result.getStatus()).json({
        statusCode: result.getStatus(),
        message: result.message,
      });

    return res.status(201).json(result);
  }

  /* Changing permissions of an admin */
  @Post('/change')
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({
    description: 'Permissão alterada com sucesso.',
    type: ChangePermissionResponseDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: new PermissionDoesNotExistException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiNotFoundResponse({
    description: new AccountNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: AllExceptionsFilterDTO,
  })
  async changePermission(
    @Body() body: ChangePermissionRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    if (!req.administrator) throw new UnauthorizedException();

    const result = await this.changePermUsecase.execute(
      body,
      req.administrator.id,
    );

    if (result instanceof HttpException)
      return res.status(result.getStatus()).json({
        statusCode: result.getStatus(),
        message: result.message,
      });

    return res.status(201).json(result);
  }

  /* Removing permissions from an admin */
  @Post('/remove')
  @ApiBearerAuth('access-token')
  @ApiCreatedResponse({
    description: 'Permissão removida com sucesso.',
    type: RemovePermissionResponseDTO,
  })
  @ApiUnprocessableEntityResponse({
    description: new PermissionDoesNotExistException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiNotFoundResponse({
    description: new AccountNotFoundException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiConflictResponse({
    description: new PermissionAlreadySetException().message,
    type: AllExceptionsFilterDTO,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: AllExceptionsFilterDTO,
  })
  async removePermission(
    @Body() body: RemovePermissionRequestDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    if (!req.administrator) throw new UnauthorizedException();

    const result = await this.removePermUsecase.execute(
      body,
      req.administrator.id,
    );

    if (result instanceof HttpException)
      return res.status(result.getStatus()).json({
        statusCode: result.getStatus(),
        message: result.message,
      });

    return res.status(201).json(result);
  }
}
