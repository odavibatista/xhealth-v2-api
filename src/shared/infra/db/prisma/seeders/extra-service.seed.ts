import { PrismaClient } from '@prisma/client';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const extraServiceSeeder = async (prisma: PrismaClient) => {
  console.log('Running extra services seeder...');

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

  const extraServices = [
    {
      name: encrypterProvider.encrypt({ content: 'Personal Trainer' }),
      description: encrypterProvider.encrypt({ content: 'Treinamento personalizado com acompanhamento profissional.' }),
      price: encrypterProvider.encrypt({ content: '99.90' }),
      imageUrl: encrypterProvider.encrypt({ content: 'https://example.com/personal-trainer.jpg' }),
      created_by: existingAdmin.id_administrator,
    },
    {
      name: encrypterProvider.encrypt({ content: 'Nutrição Esportiva' }),
      description: encrypterProvider.encrypt({ content: 'Consultoria nutricional para otimização de performance.' }),
      price: encrypterProvider.encrypt({ content: '79.90' }),
      imageUrl: encrypterProvider.encrypt({content: 'https://example.com/nutrition.jpg'}),
      created_by: existingAdmin.id_administrator,
    },
    {
      name: encrypterProvider.encrypt({ content: 'Avaliação Física' }),
      description: encrypterProvider.encrypt({ content: 'Análise completa da composição corporal e desempenho físico.' }),
      price: encrypterProvider.encrypt({ content: '49.90' }),
      imageUrl: encrypterProvider.encrypt({ content: 'https://example.com/physical-assessment.jpg' }),
      created_by: existingAdmin.id_administrator,
    },
    {
        name: encrypterProvider.encrypt({ content: 'Psicoterapia' }),
        description: encrypterProvider.encrypt({ content: 'Apoio psicológico para saúde mental e emocional.' }),
        price: encrypterProvider.encrypt({ content: '89.90' }),
        imageUrl: encrypterProvider.encrypt({ content: 'https://example.com/psychotherapy.jpg' }),
        created_by: existingAdmin.id_administrator,
    }
  ];

    const existingExtraServices = await prisma.extraService.findMany({
        where: {
        name: {
            in: extraServices.map((service) =>
            encrypterProvider.encrypt({ content: service.name }),
            ),
        },
        deletedAt: null,
        },
    });

    if (existingExtraServices.length > 0) {
        console.log('Extra services already exist, skipping seeder.');
        return;
    }

    await prisma.extraService.createMany({
        data: extraServices.map((service) => ({
            name: service.name,
            description: service.description,
            price: service.price,
            imageUrl: service.imageUrl,
            created_by: service.created_by,
        })),
    });

    console.log('Extra services seeder completed successfully.');
}