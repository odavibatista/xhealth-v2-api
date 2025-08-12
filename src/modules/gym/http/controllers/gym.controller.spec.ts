import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { AllExceptionsFilter } from '../../../../shared/domain/errors/AllException.filter';
import { GymModule } from '../../infra/modules/gym.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { gymSeeder } from '../../../../shared/infra/db/prisma/seeders/gym.seed';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app/app.module';

describe('GymController - /gyms', () => {
  const controllerRoute = '/gyms';
  const browseGymsRoute = `${controllerRoute}/browse`;
  const findGymByIdRoute = `${controllerRoute}/:cuid`;
  const createGymRoute = `${controllerRoute}/create`;
  const editGymRoute = `${controllerRoute}/edit/:cuid`;
  const deleteGymRoute = `${controllerRoute}/delete/:cuid`;

  let controller: GymController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  beforeAll(async () => {

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, GymModule, SharedModule],
      providers: [PrismaProvider]
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
    await prisma.seed([administratorSeeder, adminPermissionSeeder, gymSeeder]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear(['gyms']);
  });

  describe('GET /gyms/browse', ()  => {
    it('should return a list of gyms', async () => {
      const response = await request(app.getHttpServer())
        .get(browseGymsRoute)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  
});
