import { prisma } from '..';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const trainerSeeder = async () => {
  console.log('Running Trainers seeder...');

  const encrypterProvider = new EncrypterProvider();

  const trainer1 = {
    name: encrypterProvider.encrypt({ content: 'Anna Fernandes' }),
    instagramUrl: encrypterProvider.encrypt({
      content: 'https://instagram.com',
    }),
    twitterUrl: encrypterProvider.encrypt({ content: 'https://twitter.com' }),
    youtubeUrl: encrypterProvider.encrypt({ content: 'https://youtube.com' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/8RodANa.jpeg',
    }),
  };

  const trainer2 = {
    name: encrypterProvider.encrypt({ content: 'Willian Rossi' }),
    instagramUrl: encrypterProvider.encrypt({
      content: 'https://instagram.com',
    }),
    twitterUrl: encrypterProvider.encrypt({ content: 'https://twitter.com' }),
    youtubeUrl: encrypterProvider.encrypt({ content: 'https://youtube.com' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/fwT2RWC.jpeg',
    }),
  };

  const trainer3 = {
    name: encrypterProvider.encrypt({ content: 'Carolina Silva' }),
    instagramUrl: encrypterProvider.encrypt({
      content: 'https://instagram.com',
    }),
    twitterUrl: encrypterProvider.encrypt({ content: 'https://twitter.com' }),
    youtubeUrl: encrypterProvider.encrypt({ content: 'https://youtube.com' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/pKbq9IH.jpeg',
    }),
  };

  const trainer4 = {
    name: encrypterProvider.encrypt({ content: 'Henrique Ramirez' }),
    instagramUrl: encrypterProvider.encrypt({
      content: 'https://instagram.com',
    }),
    twitterUrl: encrypterProvider.encrypt({ content: 'https://twitter.com' }),
    youtubeUrl: encrypterProvider.encrypt({ content: 'https://youtube.com' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/yF6nGKP.jpeg',
    }),
  };

  const existingTrainers = await prisma.trainer.findMany({
    where: {
      OR: [
        { name: trainer1.name },
        { name: trainer2.name },
        { name: trainer3.name },
        { name: trainer4.name },
      ],
    },
  });

  if (existingTrainers.length > 0) {
    console.log('Trainers already exist, skipping seeder.');
    return;
  }

  await prisma.trainer.createMany({
    data: [trainer1, trainer2, trainer3, trainer4],
  });

  console.log('Trainers seeder completed.');
};
