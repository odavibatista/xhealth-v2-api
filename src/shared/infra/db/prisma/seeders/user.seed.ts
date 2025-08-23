import { PrismaClient } from '@prisma/client';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';
import { HashProvider } from '../../../../../modules/user/infra/providers/hash.provider';

export const userSeeder = async (prisma: PrismaClient) => {
  console.log('Running Users seeder...');

  const encrypterProvider = new EncrypterProvider();
  const hashProvider = new HashProvider();

  const ufSP = await prisma.uF.findUnique({
    where: { acronym: 'SP' },
  });

  if (!ufSP) return;

  const gymPlan = await prisma.gymPlan.findFirst();

  if (!gymPlan) return;

  const userEmail = 'usuario_da_xhealth@gmail.com';
  const enc = encrypterProvider.encrypt({
    content: userEmail,
  });

  const existingUser = await prisma.user.findFirst({
    where: {
      email: enc,
    },
  });

  if (existingUser) return;

  const userAddressData = {
    cep: encrypterProvider.encrypt({
      content: '04045002',
    }),
    street: encrypterProvider.encrypt({
      content: 'Av. Água Rasa',
    }),
    number: encrypterProvider.encrypt({
      content: '100',
    }),
    city: encrypterProvider.encrypt({
      content: 'São Paulo',
    }),
    uf_id: ufSP.id_uf,
  };

  const userAddress = await prisma.address.create({
    data: userAddressData,
  });

  await prisma.user.create({
    data: {
      name: encrypterProvider.encrypt({
        content: 'Usuário da XHealth',
      }),
      email: enc,
      password: encrypterProvider.encrypt({
        content: await hashProvider.hash('senha123'),
      }),
      address_id: userAddress.id_address,
      birth_date: encrypterProvider.encrypt({
        content: '1990-01-01',
      }),
      check_privacy: true,
      phone_number: encrypterProvider.encrypt({
        content: '11999559991',
      }),
      gym_plan_id: gymPlan.id_gym_plan,
    },
  });

  console.log('Users seeder completed.');
};
