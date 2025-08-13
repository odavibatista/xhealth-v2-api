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

  prisma.seed([
    ufsSeeder,
    citySeeder,
    administratorSeeder,
    adminPermissionSeeder,
    trainerSeeder,
    gymSeeder,
    gymPlanSeeder,
    gymPlanFeaturesSeeder,
  ]);
};

const seedTest = async () => {
  console.log('Running test seed: ');
  await mainSeeder();
};

if (
  appConfigurations.NODE_ENV === 'development' ||
  appConfigurations.NODE_ENV === 'test' ||
  appConfigurations.NODE_ENV === 'local'
) {
  seed();
}

if (appConfigurations.NODE_ENV === 'local') {
  mainSeeder();
}
