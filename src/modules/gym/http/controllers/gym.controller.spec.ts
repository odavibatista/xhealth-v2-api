import { Test, TestingModule } from '@nestjs/testing';
import { GymController } from './gym.controller';
import { NestExpressApplication } from '@nestjs/platform-express';
import { PrismaProvider } from '../../../../shared/infra/providers/Prisma.provider';

describe('GymController - /gyms', () => {
  const controllerRoute = '/gyms';
  const browseGymsRoute = `${controllerRoute}/browse`;
  const findGymByIdRoute = `${controllerRoute}/:cuid`;
  const createGymRoute = `${controllerRoute}/create`;
  const editGymRoute = `${controllerRoute}/edit/:cuid`;
  const deleteGymRoute = `${controllerRoute}/delete/:cuid`;

  let controller: GymController;

  let app: NestExpressApplication;
  let prisma: PrismaProvider;
  let jwtToken: string;
});
