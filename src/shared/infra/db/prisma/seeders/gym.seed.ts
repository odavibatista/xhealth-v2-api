import { PrismaClient } from '@prisma/client';
import { prisma } from '..';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const gymSeeder = async (prisma: PrismaClient) => {
  console.log('Running Gyms seeder...');

  const encrypterProvider = new EncrypterProvider();

  const ufSP = await prisma.uF.findUnique({
    where: { acronym: 'SP' },
  });

  if (!ufSP) return;

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

  const gym1AddressData = {
    cep: encrypterProvider.encrypt({
      content: '04045002',
    }),
    street: encrypterProvider.encrypt({
      content: 'Av. Jabaquara',
    }),
    number: encrypterProvider.encrypt({
      content: '1620',
    }),
    city: encrypterProvider.encrypt({
      content: 'São Paulo',
    }),
    uf_id: ufSP.id_uf,
  };

  const gym2AddressData = {
    cep: encrypterProvider.encrypt({
      content: '01504001',
    }),
    street: encrypterProvider.encrypt({
      content: 'Av. Vergueiro',
    }),
    number: encrypterProvider.encrypt({
      content: '903',
    }),
    city: encrypterProvider.encrypt({
      content: 'São Paulo',
    }),
    uf_id: ufSP.id_uf,
  };

  const gym3AddressData = {
    cep: encrypterProvider.encrypt({
      content: '01310100',
    }),
    street: encrypterProvider.encrypt({
      content: 'Av. Paulista',
    }),
    number: encrypterProvider.encrypt({
      content: '1106',
    }),
    city: encrypterProvider.encrypt({
      content: 'São Paulo',
    }),
    uf_id: ufSP.id_uf,
  };

  const gym1Address = await prisma.address.create({
    data: gym1AddressData,
  });

  const gym2Address = await prisma.address.create({
    data: gym2AddressData,
  });

  const gym3Address = await prisma.address.create({
    data: gym3AddressData,
  });

  const gym1 = {
    name: encrypterProvider.encrypt({
      content: 'XHealth São Paulo - Jabaquara',
    }),
    address_id: gym1Address.id_address,
    phone_number: encrypterProvider.encrypt({ content: '11959872118' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/EN6njoM.jpeg',
    }),
    created_by: existingAdmin.id_administrator,
  };

  const gym2 = {
    name: encrypterProvider.encrypt({
      content: 'XHealth São Paulo - Vergueiro',
    }),
    address_id: gym2Address.id_address,
    phone_number: encrypterProvider.encrypt({ content: '11999999999' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/EN6njoM.jpeg',
    }),
    created_by: existingAdmin.id_administrator,
  };

  const gym3 = {
    name: encrypterProvider.encrypt({
      content: 'XHealth São Paulo - Paulista',
    }),
    address_id: gym3Address.id_address,
    phone_number: encrypterProvider.encrypt({ content: '1198512098' }),
    imageUrl: encrypterProvider.encrypt({
      content: 'https://i.imgur.com/EN6njoM.jpeg',
    }),
    created_by: existingAdmin.id_administrator,
  };

  const existingGyms = await prisma.gym.findMany({
    where: {
      OR: [{ name: gym1.name }, { name: gym2.name }, { name: gym3.name }],
    },
  });

  if (existingGyms.length > 0) {
    console.log('Gyms already exist, skipping seeder.');
    return;
  }

  await prisma.gym.createMany({
    data: [gym1, gym2, gym3],
  });

  console.log('Gyms seeder completed.');
};
