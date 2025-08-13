import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { GymModule } from '../../infra/modules/gym.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { gymSeeder } from '../../../../shared/infra/db/prisma/seeders/gym.seed';
import { INestApplication, UnauthorizedException } from '@nestjs/common';
import { AppModule } from '../../../../app/app.module';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';
import { NotAuthenticatedException } from '../../../../shared/domain/errors/NotAuthenticated.exception';

describe('GymController - /gyms', () => {
  const controllerRoute = '/gyms';
  const browseGymsRoute = `${controllerRoute}/browse`;
  const findGymByIdRoute = `${controllerRoute}/find/:cuid`;
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
    await prisma.seed([administratorSeeder, adminPermissionSeeder, gymSeeder]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('GET /gyms/browse', () => {
    it('should return a list of gyms', async () => {
      const response = await request(app.getHttpServer())
        .get(browseGymsRoute)
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
      expect(response.body[0]).toBeInstanceOf(Object);
      expect(response.body[0]).toHaveProperty('id_gym');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('address');
      expect(response.body[0]).toHaveProperty('phone_number');
      expect(response.body[0]).toHaveProperty('imageUrl');
      expect(response.body[0]).toHaveProperty('created_at');
      expect(response.body[0].address).toHaveProperty('id_address');
      expect(response.body[0].address).toHaveProperty('cep');
      expect(response.body[0].address).toHaveProperty('street');
      expect(response.body[0].address).toHaveProperty('city');
      expect(response.body[0].address).toHaveProperty('uf_id');
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /gyms/find/:cuid', () => {
    it('should return a gym by cuid', async () => {
      // Still to be implemented
    });

    it('should return 404 if gym not found', async () => {
      const response = await request(app.getHttpServer())
        .get(findGymByIdRoute.replace(':cuid', 'non-existing-cuid'))
        .expect(404);

      expect(response.body).toHaveProperty('statusCode', 404);
      expect(response.body).toHaveProperty(
        'message',
        new GymNotFoundException().message,
      );

      jwtToken = response.body.access_token;
    });
  });

  describe('POST /gyms/create', () => {
    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .post(createGymRoute)
        .send({
          name: 'Test Gym',
          address: {
            cep: '12345678',
            street: 'Test Street',
            city: 'Test City',
            uf_id: 'SP',
          },
          phone_number: '1234567890',
        })
        .expect(401)
        .set('Accept', 'application/json');

      expect(response.body).toHaveProperty('statusCode', 401);
      expect(response.body).toHaveProperty(
        'message',
        new NotAuthenticatedException().message,
      );
    });
  });

  describe('PATCH /gyms/edit/:cuid', () => {
    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .patch(editGymRoute.replace(':cuid', 'some-cuid'))
        .send({
          name: 'Updated Gym',
          address: {
            cep: '87654321',
            street: 'Updated Street',
            city: 'Updated City',
            uf_id: 'RJ',
          },
          phone_number: '0987654321',
        })
        .expect(401)
        .set('Accept', 'application/json');

      expect(response.body).toHaveProperty('statusCode', 401);
      expect(response.body).toHaveProperty(
        'message',
        new NotAuthenticatedException().message,
      );
    });
  });

  describe('DELETE /gyms/delete/:cuid', () => {
    it('should delete a gym by cuid', async () => {
      // Still to be implemented
    });

    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .delete(deleteGymRoute.replace(':cuid', 'some-cuid'))
        .expect(401)
        .set('Accept', 'application/json');

      expect(response.body).toHaveProperty('statusCode', 401);
      expect(response.body).toHaveProperty(
        'message',
        new NotAuthenticatedException().message,
      );
    });
  });
});
