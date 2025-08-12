import { HttpException } from '@nestjs/common';

export class GymNameInUseException extends HttpException {
  constructor() {
    super('Nome da academia já está em uso.', 422);
  }
}