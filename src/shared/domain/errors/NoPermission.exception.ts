import { HttpException } from '@nestjs/common';

export class NoPermissionException extends HttpException {
  constructor() {
    super('Você não tem permissão para utilizar esse recurso.', 401);
  }
}
