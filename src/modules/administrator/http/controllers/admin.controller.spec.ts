import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { INestApplication, UnauthorizedException } from '@nestjs/common';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { AppModule } from '../../../../app/app.module';
import { AdministratorModule } from '../../infra/modules/administrator.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { faker } from '@faker-js/faker';
import { AdminLoginRequestDTO } from '../../domain/dtos/requests/AdminLogin.request.dto';
import { InvalidCredentialsException } from '../../../user/domain/dtos/errors/InvalidCredentials.exception';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { AuthenticationMiddleware } from '../../../user/http/middlewares/Auth.middleware';

describe('Admin Controller - /admin', () => {
  const controllerRoute = '/admin';
  const loginRoute = `${controllerRoute}/login`;

  let controller: AdminController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;
  let jwtProvider: JWTProvider;

  let data: AdminLoginRequestDTO = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }

  beforeAll(async () => {
    jwtProvider = new JWTProvider();
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AdministratorModule, SharedModule],
      providers: [PrismaProvider, JWTProvider],
    })
      .overrideProvider(PrismaProvider)
      .useValue(new PrismaProvider(Environment.TEST))
      .overrideProvider(AuthenticationMiddleware)
      .useValue(new AuthenticationMiddleware(jwtProvider))
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

  describe('POST - /login', ()  => {    
    describe('\nSuccessful cases:', () => {
      it('should return 200 and instance of AdminLoginResponseDTO on successful login', async () => {
        const response = await request(app.getHttpServer())
          .post(loginRoute)
          .send({
            email: 'admin@xhealth.com',
            password: 'admin123',
          })
          .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        expect(response.body).toHaveProperty('admin');
        jwtToken = response.body.token;
      });
    });

    describe('\nUnsuccessful cases:', () => {
      /*
      describe('\nPresence of Headers', ()  => {
        it('should return 401 if user is already authenticated', async () => {
          const authResponse = await request(app.getHttpServer())
            .post(loginRoute)
            .send({
              email: 'admin@xhealth.com',
              password: 'admin123',
            })
            .set('Accept', 'application/json');

          jwtToken = authResponse.body.token;

          const response = await request(app.getHttpServer())
            .post(loginRoute)
            .set('Authorization', `Bearer ${jwtToken}`)
            .send(data)
            .set('Accept', 'application/json');

          console.log(response.body);

          expect(response.status).toBe(new UnauthorizedException().getStatus());
          expect(response.body.message).toBe('Usuário já autenticado.');
        });
      });
      */

      describe('\nInvalid Credentials', () => {
        it('should return InvalidCredentialsException if user data is invalid', async () => {
          const response = await request(app.getHttpServer())
            .post(loginRoute)
            .send(data)
            .set('Accept', 'application/json');

          expect(response.status).toBe(new InvalidCredentialsException().getStatus());
          expect(response.body.message).toBe(new InvalidCredentialsException().message);
        });
      });
    })
  })
});
