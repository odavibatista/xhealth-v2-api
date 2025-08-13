import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import {
  HttpException,
  INestApplication,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';
import { AppModule } from '../../../../app/app.module';
import { UserModule } from '../../infra/modules/user.module';
import { SharedModule } from '../../../../shared/infra/modules/Shared.module';
import { Environment } from '../../../../shared/config/app.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { administratorSeeder } from '../../../../shared/infra/db/prisma/seeders/administrator.seed';
import { adminPermissionSeeder } from '../../../../shared/infra/db/prisma/seeders/admin-permission.seed';
import { gymPlanSeeder } from '../../../../shared/infra/db/prisma/seeders/gym-plan.seed';
import { faker } from '@faker-js/faker';
import { CreateUserBodyDTO } from '../../domain/dtos/requests/CreateUser.request.dto';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { EmailAlreadyRegisteredException } from '../../domain/dtos/errors/EmailAlreadyRegistered.exception';

describe('User Controller - /user', () => {
  const controllerRoute = '/user';
  const registerUserRoute = `${controllerRoute}/register`;

  let controller: UserController;

  let app: INestApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;

  const password = 'SenhaValida@1234$';

  let data: CreateUserBodyDTO;

  let mockdata = {
    id_user: faker.string.uuid(),
    name: 'Fulano de Tal',
    email: faker.internet.email(),
    password: password,
    phone_number: '11999999999',
    birth_date: '2000-01-01',
    check_privacy: true,
    password_confirmation: password,
    address: {
      cep: '12345678',
      street: 'Valid Street',
      number: '123',
      complement: 'Apt 1',
      city: 'Valid City',
      uf_id: faker.string.uuid(),
    },
    gym_plan_id: faker.string.uuid(),
  };

  data = mockdata;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule, SharedModule],
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
    ]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('POST /register', () => {
    describe('\nUnsuccessful cases:', () => {
      describe('\nInvalid address data', () => {
        it('should return UFNotFoundException if the uf id is invalid', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send(data)
            .set('Accept', 'application/json');

          expect(response.status).toBe(new UFNotFoundException().getStatus());
          expect(response.body?.message).toEqual(
            new UFNotFoundException().message,
          );
        });
      });

      describe('\nInvalid user data', () => {
        describe('\nUnprocessable Insertions', () => {
          it('should return UnprocessableDataException if the user name is invalid', async () => {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, name: 'string' })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnprocessableDataException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new UnprocessableDataException().message,
            );
          });

          it('should return UnprocessableDataException if the email is invalid', async () => {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, email: 'string' })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnprocessableDataException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new UnprocessableDataException().message,
            );
          });

          it('should return UnprocessableDataException if the birthdate is invalid', async () => {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, birth_date: '01/01/2025' })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnprocessableDataException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new UnprocessableDataException().message,
            );
          });

          it('should return UnprocessableDataException if the phonenumber is invalid', async () => {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, phone_number: 'invalid-phone-number' })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnprocessableDataException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new UnprocessableDataException().message,
            );
          });

          it('should return UnprocessableDataException if the password is invalid', async () => {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, password: 'invalid-password' })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnprocessableDataException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new UnprocessableDataException().message,
            );
          });
        });

        describe('\nConflictuous Insertions', () => {
          it('should return EmailAlreadyRegisteredException if the given email is already in use by another user', async ()  =>  {
            const response = await request(app.getHttpServer())
              .post(registerUserRoute)
              .send({ ...data, email: 'admin@xhealth.com' })
              .set('Accept', 'application/json');

              expect(response.status).toBe(
              new EmailAlreadyRegisteredException().getStatus(),
            );
            expect(response.body?.message).toContain(
              new EmailAlreadyRegisteredException().message,
            );
          })
        })
      });
    });
  });
});
