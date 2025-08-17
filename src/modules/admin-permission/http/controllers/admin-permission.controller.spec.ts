import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionController } from './admin-permission.controller';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { INestApplication, UnauthorizedException } from '@nestjs/common';
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
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { PermissionDoesNotExistException } from '../../domain/dtos/errors/PermissionDoesNotExist.exception.dto';
import { PermissionAlreadySetException } from '../../domain/dtos/errors/PermissionAlreadySet.exception.dto';
import { AdminHasNoPermissionException } from '../../domain/dtos/errors/AdminHasNoPermission.exception.dto';

describe('Admin Permissions Controller - /permissions', () => {
  let controllerRoute = '/permissions';
  let adminRoute = `/admin`;
  let addPermissionRoute = `${controllerRoute}/add`;
  let changePermissionRoute = `${controllerRoute}/change`;
  let removePermissionRoute = `${controllerRoute}/remove`;

  let controller: AdminPermissionController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;
  let mainAdminId: string;
  let secondaryAdminId: string;

  const mainAdminLoginDTO = {
    email: 'admin@xhealth.com',
    password: 'admin123',
  };

  const secondaryAdminLoginDTO = {
    email: 'secondaryadmin@xhealth.com',
    password: 'admin321',
  };

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

    describe('\nUnauthenticated cases', () => {
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

    describe('\nAuthenticated failed cases', () => {
      it('should throw AccountNotFoundException if admin is authenticated and the given admin ID does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        mainAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .get(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .expect(200);

          expect(response).toBeInstanceOf(AccountNotFoundException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin is trying to add a permission to themselves', async () => {
        let jwtToken: string;
        let adminId: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        adminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: adminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin does not have permission to add permissions', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(secondaryAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        secondaryAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: mainAdminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw PermissionDoesNotExistException if the sent permission does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'non_existent_permission',
            });

          expect(response).toBeInstanceOf(PermissionDoesNotExistException);
        });
      });

      it('should throw PermissionAlreadySetException if the admin already has the permission', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        expect(async () => {
          await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          const response = await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          expect(response).toBeInstanceOf(PermissionAlreadySetException);
        });
      });
    });

    describe('\nAuthenticated success cases', () => {
      it('should add the permission to the admin and return the admin data and added permission', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        body = {
          admin_id: secondaryAdminId,
          permission: 'can_create_gyms',
        };

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          expect(response).toBeInstanceOf(Object);
          expect(response.body).toHaveProperty('admin_id');
          expect(response.body).toHaveProperty('added_permission');
        });
      });
    });
  });

  describe('POST /permissions/change', () => {
    let body: ChangePermissionRequestDTO;

    describe('\nUnauthenticated cases', () => {
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

    describe('\nAuthenticated failed cases', () => {
      it('should throw AccountNotFoundException if admin is authenticated and the given admin ID does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        mainAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .get(changePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`);

          expect(response).toBeInstanceOf(AccountNotFoundException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin is trying to change a permission for themselves', async () => {
        let jwtToken: string;
        let adminId: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        adminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(changePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: adminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin does not have permission to change permissions', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(secondaryAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        secondaryAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(changePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: mainAdminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw PermissionDoesNotExistException if the sent permission does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(changePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'non_existent_permission',
            });

          expect(response).toBeInstanceOf(PermissionDoesNotExistException);
        });
      });
    });

    describe('\nAuthenticated success cases', () => {
      it('should change the permission of the admin and return the admin data and changed permission', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        body = {
          admin_id: secondaryAdminId,
          permission: 'can_create_gyms',
        };

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(changePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          expect(response).toBeInstanceOf(Object);
          expect(response.body).toHaveProperty('admin_id');
          expect(response.body).toHaveProperty('changed_permission');
        });
      });
    });
  });

  describe('POST /permissions/remove', () => {
    let body: RemovePermissionRequestDTO;

    describe('\nUnauthenticated cases', () => {
      it('should return 401 and NotAuthenticatedException if no token is provided', async () => {
        const response = await request(app.getHttpServer())
          .post(removePermissionRoute)
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

    describe('\nAuthenticated failed cases', () => {
      it('should throw AccountNotFoundException if admin is authenticated and the given admin ID does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        mainAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .get(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .expect(200);

          expect(response).toBeInstanceOf(AccountNotFoundException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin is trying to remove a permission to themselves', async () => {
        let jwtToken: string;
        let adminId: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        adminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: adminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw UnauthorizedException if the requesting admin does not have permission to remove permissions', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(secondaryAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;
        secondaryAdminId = loginResponse.body.admin.id_admin;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: mainAdminId,
              permission: 'can_create_gyms',
            });

          expect(response).toBeInstanceOf(UnauthorizedException);
        });
      });

      it('should throw PermissionDoesNotExistException if the sent permission does not exist', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        expect(async () => {
          const response = await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'non_existent_permission',
            });

          expect(response).toBeInstanceOf(PermissionDoesNotExistException);
        });
      });

      it('should throw AdminHasNoPermissionException if the admin already does not have the permission', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        expect(async () => {
          await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          const response = await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          expect(response).toBeInstanceOf(AdminHasNoPermissionException);
        });
      });
    });

    describe('\nAuthenticated success cases', () => {
      it('should add the permission to the admin and return the admin data and removed permission', async () => {
        let jwtToken: string;
        const loginResponse = await request(app.getHttpServer())
          .post(`${adminRoute}/login`)
          .send(mainAdminLoginDTO)
          .expect(200);

        jwtToken = loginResponse.body.access_token;

        body = {
          admin_id: secondaryAdminId,
          permission: 'can_create_gyms',
        };

        expect(async () => {
          await request(app.getHttpServer())
            .post(addPermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          const response = await request(app.getHttpServer())
            .post(removePermissionRoute)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`)
            .send({
              admin_id: secondaryAdminId,
              permission: 'can_edit_gyms',
            });

          expect(response).toBeInstanceOf(Object);
          expect(response.body).toHaveProperty('admin_id');
          expect(response.body).toHaveProperty('added_permission');
        });
      });
    });
  });
});
