import { DocumentBuilder } from '@nestjs/swagger';

export const sharedSwaggerConfig = new DocumentBuilder()
  .setTitle('XHealth Gyms API')
  .setDescription(
    'API para um sistema de gestão de planos, usuários e informações de uma rede de academias.',
  )
  .setVersion('1.0.0')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Insira um token JWT para autenticar a requisição.',
    },
    'user-token',
  )
  .build();