import { HttpException } from '@nestjs/common';

export class PermissionDoesNotExistException extends HttpException {
  constructor() {
    super('Esta Permissão não existe.', 404);
  }
}