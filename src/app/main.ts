import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors'
import { patchNestJsSwagger } from 'nestjs-zod';
import { SwaggerModule } from '@nestjs/swagger';
import { sharedSwaggerConfig } from '../shared/config/swagger.config';
import { appConfigurations } from '../shared/config/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose']
  
  })
  
  app.use(cors({
    origin: '*'
  }))

  
  patchNestJsSwagger()

  const sharedDocument = SwaggerModule.createDocument(
    app,
    sharedSwaggerConfig
  )
  SwaggerModule.setup('swagger', app, sharedDocument)

  await app.listen(appConfigurations.PORT)
}
bootstrap();
