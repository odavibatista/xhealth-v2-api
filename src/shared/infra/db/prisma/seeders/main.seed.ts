import { prisma } from '..';
import { hash } from 'bcryptjs';
import { administratorSeeder } from './administrator.seed';

export const mainSeeder = async () => {
  console.log('Running main seeder...');

  await administratorSeeder();
};
