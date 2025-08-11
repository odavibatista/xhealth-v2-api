import { HttpException } from '@nestjs/common';

export class AdminHasNoPermissionException extends HttpException {
  constructor() {
    super('Admin já não possui esta permissão.', 403);
  }
}
