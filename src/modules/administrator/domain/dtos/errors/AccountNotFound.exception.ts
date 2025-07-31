import { HttpException } from '@nestjs/common';

export class AccountNotFoundException extends HttpException {
  constructor() {
    super('Conta não encontrada.', 404);
  }
}
