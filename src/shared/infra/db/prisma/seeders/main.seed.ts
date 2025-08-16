import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';
import { trainerSeeder } from './trainer.seed';
import ufsSeeder from './uf.seed';
import citySeeder from './city.seed';
import { gymSeeder } from './gym.seed';
import { gymPlanSeeder } from './gym-plan.seed';
import { gymPlanFeaturesSeeder } from './gym-plan-feature.seed';
import { PrismaProvider } from '../../../providers/Prisma.provider';
import { extraServiceSeeder } from './extra-service.seed';

const prisma = new PrismaProvider();

export const mainSeeder = async () => {
  console.log('Running main seeder...');

  prisma.seed([ufsSeeder]);
  prisma.seed([citySeeder]);
  prisma.seed([administratorSeeder]);
  prisma.seed([adminPermissionSeeder]);
  prisma.seed([trainerSeeder]);
  prisma.seed([gymSeeder]);
  prisma.seed([gymPlanSeeder]);
  prisma.seed([gymPlanFeaturesSeeder]);
  prisma.seed([extraServiceSeeder]);
};
