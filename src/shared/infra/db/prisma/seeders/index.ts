import 'dotenv/config';

import { appConfigurations } from '../../../../config/app.config';
import { mainSeeder } from './main.seed';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';

const seed = async () => {
  console.log('Running seed: ');

  await administratorSeeder();
  await adminPermissionSeeder();
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
