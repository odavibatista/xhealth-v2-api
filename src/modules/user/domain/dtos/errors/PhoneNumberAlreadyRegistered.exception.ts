import { HttpException } from '@nestjs/common';

export class PhoneNumberAlreadyRegisteredException extends HttpException {
  constructor() {
    super('Este número de telefone já está associado a uma conta.', 403);
  }
}
