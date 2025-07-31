import { HttpException } from '@nestjs/common';

export class TestimonyNotFoundException extends HttpException {
  constructor() {
    super('Depoimento não encontrado.', 404);
  }
}
