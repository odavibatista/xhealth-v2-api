import { prisma } from '..';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';
import { trainerSeeder } from './trainer.seed';

export const mainSeeder = async () => {
  console.log('Running main seeder...');

  await administratorSeeder();
  await adminPermissionSeeder();
  await trainerSeeder();
};
