import { HttpException } from '@nestjs/common';

export class TrainerNotFoundException extends HttpException {
  constructor() {
    super('Treinador não encontrado.', 404);
  }
}
