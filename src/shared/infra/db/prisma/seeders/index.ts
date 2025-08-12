import 'dotenv/config';

import { appConfigurations } from '../../../../config/app.config';
import { mainSeeder } from './main.seed';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';
import { trainerSeeder } from './trainer.seed';
import ufsSeeder from './uf.seed';
import citySeeder from './city.seed';
import { gymSeeder } from './gym.seed';
import { gymPlanSeeder } from './gym-plan.seed';
import { gymPlanFeaturesSeeder } from './gym-plan-feature.seed';
import { PrismaProvider } from '../../../providers/Prisma.provider';

const prisma = new PrismaProvider();

const seed = async () => {
  console.log('Running seed: ');

  prisma.seed([ufsSeeder]);
  prisma.seed([citySeeder]);
  prisma.seed([administratorSeeder])
  prisma.seed([adminPermissionSeeder]);
  prisma.seed([trainerSeeder]);
  prisma.seed([gymSeeder]);
  prisma.seed([gymPlanSeeder]);
  prisma.seed([gymPlanFeaturesSeeder]);
};

const seedTest = async () => {
  console.log('Running test seed: ');
  await mainSeeder();
};

if (appConfigurations.NODE_ENV === 'development') {
  seedTest();
}

if (appConfigurations.NODE_ENV === 'local') {
  mainSeeder();
}
