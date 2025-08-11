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
import {
  AddPermissionRequestDTO,
  AddPermissionResponseDTO,
} from '../../domain/dtos/requests/AddPermission.request.dto';
import { Request, Response } from 'express';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { RemovePermissionUsecase } from '../../infra/usecases/remove-permission.usecase';
import { ChangePermissionUsecase } from '../../infra/usecases/change-permission.usecase';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { PermissionAlreadySetException } from '../../domain/dtos/errors/PermissionAlreadySet.exception.dto';
import { ChangePermissionRequestDTO, ChangePermissionResponseDTO } from '../../domain/dtos/requests/ChangePermission.request.dto';

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
    type: AddPermissionResponseDTO,
  })
  @ApiNotFoundResponse({
    description: new AccountNotFoundException().message,
    type: AccountNotFoundException,
  })
  @ApiConflictResponse({
    description: new PermissionAlreadySetException().message,
    type: PermissionAlreadySetException,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: UnauthorizedException,
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
  @ApiNotFoundResponse({
    description: new AccountNotFoundException().message,
    type: AccountNotFoundException,
  })
  @ApiUnauthorizedResponse({
    description: new UnauthorizedException().message,
    type: UnauthorizedException,
  })
  async changePermission(@Body() body: ChangePermissionRequestDTO, @Req() req: Request, @Res() res: Response): Promise<Response> {
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

    return res.status(200).json(result);
  }
}
