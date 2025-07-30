import { HttpException } from '@nestjs/common';

export class ServiceNotFoundException extends HttpException {
  constructor() {
    super('Usuário não encontrado.', 404);
  }
}
