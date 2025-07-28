import 'dotenv/config';

import z, { ZodError } from 'zod';
import { EnvironmentException } from '../domain/errors/Environment.exception';
import { join } from 'path';

const appConfigurationsSchema = z.object({
  FRONTEND_URL: z.string().min(1),

  DATABASE_URL: z.string().min(1),

  PORT: z.number(),

  NODE_ENV: z.string(),

  CRYPTO_SECRET: z.string().min(1),
  CRYPTO_IV: z.string().min(1),

  APP_SECRET: z.string().min(1),
});

let appConfigurations: z.infer<typeof appConfigurationsSchema>;

try {
  appConfigurations = appConfigurationsSchema.parse({
    FRONTEND_URL: process.env.FRONTEND_URL,

    DATABASE_URL: process.env.DATABASE_URL,

    PORT: Number(process.env.PORT),

    NODE_ENV: process.env.NODE_ENV,

    CRYPTO_SECRET: process.env.CRYPTO_SECRET,
    CRYPTO_IV: process.env.CRYPTO_IV,

    APP_SECRET: process.env.APP_SECRET,
  });
} catch (error) {
  if (error instanceof ZodError) {
    throw new EnvironmentException(error);
  }
}

export { appConfigurations };
