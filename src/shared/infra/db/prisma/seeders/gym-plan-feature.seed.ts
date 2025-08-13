import { PrismaClient } from '@prisma/client';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const gymPlanFeaturesSeeder = async (prisma: PrismaClient) => {
  console.log('Running Gym Plan Features seeder...');
  const encrypterProvider = new EncrypterProvider();

  const adminName = 'Admin Default';
  const enc = encrypterProvider.encrypt({ content: adminName });

  const passEasy = 'Pass Easy Start';
  const passPro = 'Pass Pro';
  const passMaster = 'Pass Master';

  const existingAdmin = await prisma.administrator.findFirst({
    where: {
      name: enc,
    },
  });

  if (!existingAdmin) {
    console.log('No administrator found, skipping gym seeder.');
    return;
  }

  const passEasyPlan = await prisma.gymPlan.findFirst({
    where: {
      name: encrypterProvider.encrypt({ content: passEasy }),
      deletedAt: null,
    },
  });

  const passProPlan = await prisma.gymPlan.findFirst({
    where: {
      name: encrypterProvider.encrypt({ content: passPro }),
      deletedAt: null,
    },
  });

  const passMasterPlan = await prisma.gymPlan.findFirst({
    where: {
      name: encrypterProvider.encrypt({ content: passMaster }),
      deletedAt: null,
    },
  });

  if (!passEasyPlan || !passProPlan || !passMasterPlan) {
    console.log('One or more gym plans not found, skipping features seeder.');
    return;
  }

  const passEasyFeatures = [
    'Treine sem Restrição 24/7',
    'Personal Trainer',
    'Acesso ao Aplicativo',
  ];

  const passProFeatures = [
    'Tudo do Plano Easy+',
    'Programa Individual de Treino',
    'Nutricionista',
  ];

  const passMasterFeatures = [
    'Tudo do Plano Easy+',
    'Tudo do Plano Pro+',
    'Suporte 24/7',
  ];

  for (const feature of passEasyFeatures) {
    await prisma.gymPlanFeature.create({
      data: {
        feature_name: feature,
        gym_plan_id: passEasyPlan.id_gym_plan,
        created_by: existingAdmin.id_administrator,
      },
    });
  }

  for (const feature of passProFeatures) {
    await prisma.gymPlanFeature.create({
      data: {
        feature_name: feature,
        gym_plan_id: passProPlan.id_gym_plan,
        created_by: existingAdmin.id_administrator,
      },
    });
  }

  for (const feature of passMasterFeatures) {
    await prisma.gymPlanFeature.create({
      data: {
        feature_name: feature,
        gym_plan_id: passMasterPlan.id_gym_plan,
        created_by: existingAdmin.id_administrator,
      },
    });
  }

  console.log('Gym Plan Features seeder completed.');
};
