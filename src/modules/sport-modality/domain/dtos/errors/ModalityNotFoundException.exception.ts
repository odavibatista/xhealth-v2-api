import { HttpException } from '@nestjs/common';

export class ModalityNotFoundException extends HttpException {
  constructor() {
    super('Modalidade não encontrada.', 404);
  }
}
