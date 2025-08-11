import { prisma } from '..';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';

export const mainSeeder = async () => {
  console.log('Running main seeder...');

  await administratorSeeder();
  await adminPermissionSeeder();
};
