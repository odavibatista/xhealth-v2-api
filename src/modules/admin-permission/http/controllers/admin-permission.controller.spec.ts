import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionController } from './admin-permission.controller';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app/app.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { ChangePermissionRequestDTO } from '../../domain/dtos/requests/ChangePermission.request.dto';
import { AddPermissionRequestDTO } from '../../domain/dtos/requests/AddPermission.request.dto';
import { NotAuthenticatedException } from '../../../../shared/domain/errors/NotAuthenticated.exception';
import { RemovePermissionRequestDTO } from '../../domain/dtos/requests/RemovePermission.request.dto';

describe('Admin Permissions Controller - /permissions', () => {
  let controllerRoute = '/permissions';
  let addPermissionRoute = `${controllerRoute}/add`;
  let changePermissionRoute = `${controllerRoute}/change`;
  let removePermissionRoute = `${controllerRoute}/remove`;

  let controller: AdminPermissionController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, SharedModule],
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
    await prisma.seed([administratorSeeder, adminPermissionSeeder]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('POST /permissions/add', () => {
    let body: AddPermissionRequestDTO;

    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .post(addPermissionRoute)
        .send({
          admin: 'admin-cuid',
          permission: 'new-permission',
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

  describe('POST /permissions/change', () => {
    let body: ChangePermissionRequestDTO;

    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .post(changePermissionRoute)
        .send({
          admin: 'admin-cuid',
          permission: 'existing-permission',
          newPermission: 'new-permission',
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

  describe('POST /permissions/remove', () => {
    let body: RemovePermissionRequestDTO;

    it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
      const response = await request(app.getHttpServer())
        .post(removePermissionRoute)
        .send({
          admin: 'admin-cuid',
          permission: 'permission-to-remove',
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
});
