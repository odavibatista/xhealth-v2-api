import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import {
  HttpException,
  INestApplication,
  UnauthorizedException,
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
import ufsSeeder from '../../../../shared/infra/db/prisma/seeders/uf.seed';
import { PhoneNumberAlreadyRegisteredException } from '../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { GymPlanNotFoundException } from '../../../gym-plan/domain/dtos/errors/GymPlanNotFound.exception';
import { InvalidCredentialsException } from '../../domain/dtos/errors/InvalidCredentials.exception';
import { userSeeder } from '../../../../shared/infra/db/prisma/seeders/user.seed';

describe('User Controller - /user', () => {
  const controllerRoute = '/user';
  const registerUserRoute = `${controllerRoute}/register`;
  const loginUserRoute = `${controllerRoute}/login`;

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
      complement: 'Apartamento 1',
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
      ufsSeeder,
      administratorSeeder,
      adminPermissionSeeder,
      gymPlanSeeder,
      userSeeder,
    ]);
    jest.clearAllMocks();
  });

  afterEach(async () => {
    await prisma.clear('all');
  });

  describe('POST /register', () => {
    describe('\nSuccessful cases:', () => {
      it('should register a new user successfully', async () => {
        await prisma.uF
          .findFirst({
            where: {
              acronym: 'SP',
            },
          })
          .then(async (uf) => {
            //@ts-ignore
            let validUfid = uf.id_uf;

            await prisma.gymPlan.findFirst().then((gymPlan) => {
              //@ts-ignore
              let validGymPlanId = gymPlan.id_gym_plan;

              expect(async () => {
                const response = await request(app.getHttpServer())
                  .post(registerUserRoute)
                  .send({
                    ...data,
                    gym_plan_id: validGymPlanId,
                    address: {
                      uf_id: validUfid,
                      cep: '12345678',
                      street: 'Valid Street',
                      number: '123',
                      complement: 'Apt 1',
                      city: 'Valid City',
                    },
                  })
                  .set('Accept', 'application/json');

                expect(response.status).toBe(201);
                expect(response.body).toHaveProperty('token');
                expect(response.body).toHaveProperty('user');
                expect(response.body.user).toHaveProperty('id_user');
                expect(response.body.user.name).toBe('Fulano de Tal');
              });
            });
          });
      });
    });
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

        it('should return UnprocessableDataException if the cep is invalid', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send({ ...data, address: { ...data.address, cep: 'invalid-cep' } })
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new UnprocessableDataException().getStatus(),
          );
          expect(response.body?.message).toContain(
            new UnprocessableDataException().message,
          );
        });

        it('should return UnprocessableDataException if the street is misformatted', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send({ ...data, address: { ...data.address, street: '#' } })
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new UnprocessableDataException().getStatus(),
          );
          expect(response.body?.message).toContain(
            new UnprocessableDataException().message,
          );
        });

        it('should return UnprocessableDataException if the number is misformatted', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send({ ...data, address: { ...data.address, number: '#' } })
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new UnprocessableDataException().getStatus(),
          );
          expect(response.body?.message).toContain(
            new UnprocessableDataException().message,
          );
        });

        it('should return UnprocessableDataException if the city is misformatted', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send({ ...data, address: { ...data.address, city: '#' } })
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new UnprocessableDataException().getStatus(),
          );
          expect(response.body?.message).toContain(
            new UnprocessableDataException().message,
          );
        });

        it('should return UnprocessableDataException if the complement is misformatted', async () => {
          const response = await request(app.getHttpServer())
            .post(registerUserRoute)
            .send({
              ...data,
              address: {
                ...data.address,
                complement: faker.string.alphanumeric(101),
              },
            })
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new UnprocessableDataException().getStatus(),
          );
          expect(response.body?.message).toContain(
            new UnprocessableDataException().message,
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
          it('should return EmailAlreadyRegisteredException if the given email is already in use by another user', async () => {
            //@ts-ignore
            await prisma.uF
              .findFirst({
                where: {
                  acronym: 'SP',
                },
              })
              .then(async (uf) => {
                //@ts-ignore
                let validUfid = uf.id_uf;

                expect(async () => {
                  const response = await request(app.getHttpServer())
                    .post(registerUserRoute)
                    .send({
                      ...data,
                      email: 'admin@xhealth.com',
                      address: {
                        uf_id: validUfid,
                        cep: '12345678',
                        street: 'Valid Street',
                        number: '123',
                        complement: 'Apt 1',
                        city: 'Valid City',
                      },
                    })
                    .set('Accept', 'application/json');

                  expect(response.status).toBe(
                    new EmailAlreadyRegisteredException().getStatus(),
                  );
                  expect(response.body?.message).toContain(
                    new EmailAlreadyRegisteredException().message,
                  );
                });
              });
          });

          it('should return PhoneNumberAlreadyRegisteredException if the given phone number is already in use by another user or gym', async () => {
            //@ts-ignore
            await prisma.uF
              .findFirst({
                where: {
                  acronym: 'SP',
                },
              })
              .then(async (uf) => {
                //@ts-ignore
                let validUfid = uf.id_uf;

                expect(async () => {
                  const response = await request(app.getHttpServer())
                    .post(registerUserRoute)
                    .send({
                      ...data,
                      phone_number: '11999999999',
                      email: 'fulanodetal@gmail.com',
                      address: {
                        uf_id: validUfid,
                        cep: '12345678',
                        street: 'Valid Street',
                        number: '123',
                        complement: 'Apt 1',
                        city: 'Valid City',
                      },
                    })
                    .set('Accept', 'application/json');

                  expect(response.status).toBe(
                    new PhoneNumberAlreadyRegisteredException().getStatus(),
                  );
                  expect(response.body?.message).toContain(
                    new PhoneNumberAlreadyRegisteredException().message,
                  );
                });
              });
          });

          it('should return GymPlanNotFoundException if the gym plan id is invalid', async () => {
            //@ts-ignore
            await prisma.uF
              .findFirst({
                where: {
                  acronym: 'SP',
                },
              })
              .then(async (uf) => {
                //@ts-ignore
                let validUfid = uf.id_uf;

                expect(async () => {
                  const response = await request(app.getHttpServer())
                    .post(registerUserRoute)
                    .send({
                      ...data,
                      gym_plan_id: 'invalid-gym-plan-id',
                      email: faker.internet.email(),
                      address: {
                        uf_id: validUfid,
                        cep: '12345678',
                        street: 'Valid Street',
                        number: '123',
                        complement: 'Apt 1',
                        city: 'Valid City',
                      },
                    })
                    .set('Accept', 'application/json');

                  expect(response.status).toBe(
                    new GymPlanNotFoundException().getStatus(),
                  );
                  expect(response.body?.message).toContain(
                    new GymPlanNotFoundException().message,
                  );
                });
              });
          });
        });
      });
    });
  });

  describe('POST /login', () => {
    describe('\nSuccessful cases:', () => {
      it('should return 200 and instance of UserLoginResponseDTO on successful login', async () => {
        const response = await request(app.getHttpServer())
          .post(loginUserRoute)
          .send({
            email: 'usuario_da_xhealth@gmail.com',
            password: 'senha123',
          })
          .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
        expect(response.body).toHaveProperty('user');
        jwtToken = response.body.token;
      });
    });

    describe('\nUnsuccessful cases:', () => {
      describe('\nInvalid Credentials', () => {
        it('should return InvalidCredentialsException if user login data is invalid', async () => {
          const response = await request(app.getHttpServer())
            .post(loginUserRoute)
            .send(data)
            .set('Accept', 'application/json');

          expect(response.status).toBe(
            new InvalidCredentialsException().getStatus(),
          );
          expect(response.body.message).toBe(
            new InvalidCredentialsException().message,
          );
        });
      });

      describe('\nBlocked access due to multiple misinsertions', () => {
        it('should return UnauthorizedException if the user has misplaced their password five times or more', async () => {
          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          await request(app.getHttpServer())
            .post(loginUserRoute)
            .send({
              ...data,
              password: 'wrong-password',
            })
            .set('Accept', 'application/json');

          expect(async () => {
            const response = await request(app.getHttpServer())
              .post(loginUserRoute)
              .send({
                ...data,
                password: 'senha123',
              })
              .set('Accept', 'application/json');

            expect(response.status).toBe(
              new UnauthorizedException().getStatus(),
            );
            expect(response.body.message).toBe(
              new UnauthorizedException().message,
            );
          });
        });
      });
    });
  });
});
