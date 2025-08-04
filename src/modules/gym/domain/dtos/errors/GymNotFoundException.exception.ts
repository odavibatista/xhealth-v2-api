import { HttpException } from '@nestjs/common';

export class GymNotFoundException extends HttpException {
  constructor() {
    super('Academia não encontrada.', 404);
  }
}
