import 'dotenv/config';

import z, { ZodError } from 'zod';
import { EnvironmentException } from '../domain/errors/Environment.exception';
import { join } from 'path';

const appConfigurationsSchema = z.object({
  FRONTEND_URL: z.string().min(1),

  DATABASE_URL: z.string().min(1),
  PORT: z.union([z.string(), z.number()]).transform((port) => Number(port)).default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'local'])
    .default('development'),

  CRYPTO_SECRET: z.string().min(1),
  CRYPTO_IV: z.string().min(1),

  APP_SECRET: z.string().min(1),
});