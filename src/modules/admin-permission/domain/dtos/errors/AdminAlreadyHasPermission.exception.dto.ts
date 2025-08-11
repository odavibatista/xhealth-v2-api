import { HttpException } from '@nestjs/common';

export class AdminAlreadyHasPermissionException extends HttpException {
  constructor() {
    super('Admin já possui esta permissão.', 403);
  }
}
