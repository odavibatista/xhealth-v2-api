import 'dotenv/config';

import { appConfigurations } from '../../../../config/app.config';
import { mainSeeder } from './main.seed';
import { administratorSeeder } from './administrator.seed';
import { adminPermissionSeeder } from './admin-permission.seed';
import { trainerSeeder } from './trainer.seed';
import ufsSeeder from './uf.seed';
import citySeeder from './city.seed';

const seed = async () => {
  console.log('Running seed: ');
  
  await ufsSeeder();
  await citySeeder();
  await administratorSeeder();
  await adminPermissionSeeder();
  await trainerSeeder();
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
