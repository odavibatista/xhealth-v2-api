import 'dotenv/config';

import { appConfigurations } from '../../../../config/app.config';
import { mainSeeder } from './main.seed';

const seed = async () => {
  console.log('Running seed: ');
};

const seedTest = async () => {
  console.log('Running test seed: ');
};

if (appConfigurations.NODE_ENV === 'development') {
  seedTest();
}

if (appConfigurations.NODE_ENV === 'local') {
  mainSeeder();
}
