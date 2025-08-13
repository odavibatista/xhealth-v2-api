import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { TrainerController } from './trainer.controller';
import { INestApplication } from '@nestjs/common';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { AppModule } from '../../../../app/app.module';
import { TrainerModule } from '../../infra/modules/trainer.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { trainerSeeder } from '../../../../shared/infra/db/prisma/seeders/trainer.seed';
import { TrainerNotFoundException } from '../../domain/dtos/errors/TrainerNotFound.exception';

describe('Trainer Controller - /trainers', () => {
  const controllerRoute = '/trainers';
  const browseTrainersRoute = `${controllerRoute}/browse`;
  const findTrainerByIdRoute = `${controllerRoute}/find/:cuid`;

  let controller: TrainerController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TrainerModule, SharedModule],
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
    await prisma.seed([administratorSeeder, trainerSeeder]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('GET /trainers/browse', () => {
    it('should return a list of trainers', async () => {
      const response = await request(app.getHttpServer())
        .get(browseTrainersRoute)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body[0]).toBeInstanceOf(Object);
      expect(response.body[0]).toHaveProperty('id_trainer');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('imageUrl');
      expect(response.body[0]).toHaveProperty('instagramUrl');
      expect(response.body[0]).toHaveProperty('twitterUrl');
      expect(response.body[0]).toHaveProperty('youtubeUrl');
    });
  });

  describe('GET /trainers/find/:cuid', () => {
    it('should return 200 and a trainer object if trainer is found', async () => {
      const cuidResponse = await request(app.getHttpServer())
        .get(browseTrainersRoute)
        .expect(200);

      const trainerCuid = cuidResponse.body[0].id_trainer;

      expect(async () => {
        const response = await request(app.getHttpServer())
          .get(findTrainerByIdRoute.replace(':cuid', trainerCuid))
          .expect(200);

        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty('id_trainer');
        expect(response.body).toHaveProperty('imageUrl');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('instagramUrl');
        expect(response.body).toHaveProperty('twitterUrl');
        expect(response.body).toHaveProperty('youtubeUrl');
      });
    });
    it('should return 404 and TrainerNotFoundException if trainer is not found', async () => {
      const response = await request(app.getHttpServer())
        .get(findTrainerByIdRoute.replace(':cuid', 'non-existing-cuid'))
        .expect(404);

      expect(response.body).toHaveProperty('statusCode', 404);
      expect(response.body).toHaveProperty(
        'message',
        new TrainerNotFoundException().message,
      );
    });
  });
});
