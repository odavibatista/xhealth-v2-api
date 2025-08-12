import { prisma } from '..';
import { HashProvider } from '../../../../../modules/user/infra/providers/hash.provider';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const administratorSeeder = async () => {
  console.log('Running administrator seeder...');
  const hashProvider = new HashProvider();
  const encrypterProvider = new EncrypterProvider();

  const adminName = 'Admin Default';
  const enc = encrypterProvider.encrypt({ content: adminName });

  const secondaryAdminName = 'Admin Secondary';
  const encSecondary = encrypterProvider.encrypt({
    content: secondaryAdminName,
  });

  const existingAdmin = await prisma.administrator.findFirst({
    where: {
      name: enc,
    },
  });

  if (!existingAdmin) {
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
  }

    const existingSecondaryAdmin = await prisma.administrator.findFirst({
      where: {
        name: encSecondary,
      },
    });

    if (!existingSecondaryAdmin)  {
      await prisma.administrator.create({
        data: {
          name: encSecondary,
          email: encrypterProvider.encrypt({
            content: 'secondaryadmin@xhealth.com',
          }),
          password: encrypterProvider.encrypt({
            content: await hashProvider.hash('admin321'),
          }),
          role: 'ADMIN',
          created_by: existingAdmin ? existingAdmin.id_administrator : null,
        },
      });
    }

};
