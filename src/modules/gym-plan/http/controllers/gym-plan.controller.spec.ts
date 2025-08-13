import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { GymPlanController } from './gym-plan.controller';
import { AppModule } from '../../../../app/app.module';
import { GymPlanModule } from '../../infra/modules/gym-plan.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { gymPlanSeeder } from '../../../../shared/infra/db/prisma/seeders/gym-plan.seed';
import { GymPlanNotFoundException } from '../../domain/dtos/errors/GymPlanNotFound.exception';
import { gymPlanFeaturesSeeder } from '../../../../shared/infra/db/prisma/seeders/gym-plan-feature.seed';

describe('Gym Plan Controller - /gym-plans', () => {
  const controllerRoute = '/gym-plans';
  const browseGymPlansRoute = `${controllerRoute}/browse`;
  const findGymPlanByIdRoute = `${controllerRoute}/find/:cuid`;

  let controller: GymPlanController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, GymPlanModule, SharedModule],
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
    await prisma.seed([
      administratorSeeder,
      adminPermissionSeeder,
      gymPlanSeeder,
      gymPlanFeaturesSeeder,
    ]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('GET /gym-plans/browse', () => {
    it('should return a list of gym plans', async () => {
      const response = await request(app.getHttpServer())
        .get(browseGymPlansRoute)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body[0]).toBeInstanceOf(Object);
      expect(response.body[0]).toHaveProperty('id_gym_plan');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('price');
      expect(response.body[0]).toHaveProperty('duration');
      expect(response.body[0]).toHaveProperty('description');
      expect(response.body[0]).toHaveProperty('createdAt');
    });
  });

  describe('GET /gym-plans/find/:cuid', () => {
    it('should return 200 and a gym plan object when a valid CUID is provided', async () => {
      const cuidResponse = await request(app.getHttpServer())
        .get(browseGymPlansRoute)
        .expect(200);

      const gymCuid = cuidResponse.body[0].id_gym_plan;

      expect(async () => {
        const response = await request(app.getHttpServer())
          .get(findGymPlanByIdRoute.replace(':cuid', gymCuid))
          .expect(200);

        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id_gym_plan');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('description');
        expect(response.body).toHaveProperty('price');
        expect(response.body).toHaveProperty('duration');
        expect(response.body).toHaveProperty('createdAt');
        expect(response.body).toHaveProperty('features');
        expect(response.body.features).toBeInstanceOf(Array);
        expect(response.body.features.length).toBeGreaterThan(0);
      });
    });
    it('should return 404 and GymPlanNotFoundException if gym plan is not found', async () => {
      const response = await request(app.getHttpServer())
        .get(findGymPlanByIdRoute.replace(':cuid', 'non-existing-cuid'))
        .expect(404);

      expect(response.body).toHaveProperty('statusCode', 404);
      expect(response.body).toHaveProperty(
        'message',
        new GymPlanNotFoundException().message,
      );
    });
  });
});
