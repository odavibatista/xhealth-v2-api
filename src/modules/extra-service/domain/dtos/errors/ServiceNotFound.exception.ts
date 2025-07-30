import { HttpException } from '@nestjs/common';

export class ServiceNotFoundException extends HttpException {
  constructor() {
    super('Serviço não encontrado.', 404);
  }
}
