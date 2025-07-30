import { HttpException } from '@nestjs/common';

export class GymPlanNotFoundException extends HttpException {
  constructor() {
    super('Plano não encontrado.', 404);
  }
}
