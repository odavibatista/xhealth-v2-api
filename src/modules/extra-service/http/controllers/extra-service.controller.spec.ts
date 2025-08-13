import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { ExtraServiceController } from './extra-service.controller';
import { INestApplication } from '@nestjs/common';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { AppModule } from '../../../../app/app.module';
import { ExtraServiceModule } from '../../infra/modules/extra-service.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { ServiceNotFoundException } from '../../domain/dtos/errors/ServiceNotFound.exception';

describe('Extra Services Controller - /services', () => {
  const controllerRoute = '/services';
  const browseExtraServicesRoute = `${controllerRoute}/browse`;
  const findExtraServiceByIdRoute = `${controllerRoute}/find/:cuid`;

  let controller: ExtraServiceController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ExtraServiceModule, SharedModule],
      providers: [PrismaProvider],
    })
      .overrideProvider(PrismaProvider)
      .useValue(new PrismaProvider(Environment.TEST))
      .compile();

    prisma = moduleRef.get(PrismaProvider);

    app = moduleRef.createNestApplication<NestExpressApplication>();
    app.useGlobalFilters();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    await prisma.seed([administratorSeeder]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('GET /services/browse', () => {
    it('should return a list of services', async () => {
      const response = await request(app.getHttpServer())
        .get(browseExtraServicesRoute)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('GET /services/find/:cuid', () => {
    it('should return 404 and ServiceNotFoundException if service is not found', async () => {
      const response = await request(app.getHttpServer())
        .get(findExtraServiceByIdRoute.replace(':cuid', 'non-existing-cuid'))
        .expect(404);

      expect(response.body).toHaveProperty('statusCode', 404);
      expect(response.body).toHaveProperty(
        'message',
        new ServiceNotFoundException().message,
      );
    });
  });
});
