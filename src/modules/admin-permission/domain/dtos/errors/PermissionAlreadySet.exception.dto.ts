import { HttpException } from '@nestjs/common';

export class PermissionAlreadySetException extends HttpException {
  constructor() {
    super('Esta Permissão já está definida.', 403);
  }
}