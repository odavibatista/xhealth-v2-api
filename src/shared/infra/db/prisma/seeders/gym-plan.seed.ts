import { PrismaClient } from '@prisma/client';
import { prisma } from '..';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const gymPlanSeeder = async (prisma: PrismaClient) => {
  console.log('Running Gym Plans seeder...');
  const encrypterProvider = new EncrypterProvider();

  const adminName = 'Admin Default';
  const enc = encrypterProvider.encrypt({ content: adminName });

  const existingAdmin = await prisma.administrator.findFirst({
    where: {
      name: enc,
    },
  });

  if (!existingAdmin) {
    console.log('No administrator found, skipping gym seeder.');
    return;
  }

  const gymPlans = [
    {
      name: encrypterProvider.encrypt({ content: 'Pass Easy Start' }),
      description: encrypterProvider.encrypt({ content: '' }),
      price: encrypterProvider.encrypt({ content: '59.90' }),
      duration: encrypterProvider.encrypt({ content: '30' }),
      created_by: existingAdmin.id_administrator,
    },
    {
      name: encrypterProvider.encrypt({ content: 'Pass Pro' }),
      description: encrypterProvider.encrypt({ content: '' }),
      price: encrypterProvider.encrypt({ content: '129.90' }),
      duration: encrypterProvider.encrypt({ content: '30' }),
      created_by: existingAdmin.id_administrator,
    },
    {
      name: encrypterProvider.encrypt({ content: 'Pass Master' }),
      description: encrypterProvider.encrypt({ content: '' }),
      price: encrypterProvider.encrypt({ content: '229.90' }),
      duration: encrypterProvider.encrypt({ content: '30' }),
      created_by: existingAdmin.id_administrator,
    },
  ];

  const existingGymPlans = await prisma.gymPlan.findMany({
    where: {
      name: {
        in: gymPlans.map((plan) =>
          encrypterProvider.encrypt({ content: plan.name }),
        ),
      },
      deletedAt: null,
    },
  });

  if (existingGymPlans.length > 0) {
    console.log('Gym plans already exist, skipping seeder.');
    return;
  }

  await prisma.gymPlan.createMany({
    data: gymPlans.map((plan) => ({
      name: plan.name,
      description: plan.description,
      price: plan.price,
      duration: plan.duration,
      created_by: plan.created_by,
    })),
  });

  console.log('Gym Plans seeder completed successfully.');
};
