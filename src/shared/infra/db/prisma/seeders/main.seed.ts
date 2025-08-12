import { prisma } from '..';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';
import { trainerSeeder } from './trainer.seed';
import ufsSeeder from './uf.seed';
import citySeeder from './city.seed';
import { gymSeeder } from './gym.seed';
import { gymPlanSeeder } from './gym-plan.seed';
import { gymPlanFeaturesSeeder } from './gym-plan-feature.seed';

export const mainSeeder = async () => {
  console.log('Running main seeder...');

  await ufsSeeder();
  await citySeeder();
  await administratorSeeder();
  await adminPermissionSeeder();
  await trainerSeeder();
  await gymSeeder();
  await gymPlanSeeder();
  await gymPlanFeaturesSeeder();
};
