import { prisma } from '..';
import { HashProvider } from '../../../../../modules/user/infra/providers/hash.provider';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const administratorSeeder = async () => {
  const hashProvider = new HashProvider();
  const encrypterProvider = new EncrypterProvider();

  const adminName = 'Admin Default';
  const enc = encrypterProvider.encrypt({ content: adminName });

  const existingAdmin = await prisma.administrator.findFirst({
    where: {
      name: enc,
    },
  });

  if (existingAdmin) return;

  await prisma.administrator.create({
    data: {
      name: enc,
      email: encrypterProvider.encrypt({ content: 'admin@xhealth.com' }),
      password: encrypterProvider.encrypt({
        content: await hashProvider.hash('admin123'),
      }),
      role: 'ADMIN',
    },
  });
};
