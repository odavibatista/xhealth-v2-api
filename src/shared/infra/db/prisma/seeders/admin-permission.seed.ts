import { prisma } from '..';
import { EncrypterProvider } from '../../../providers/Encrypter.provider';

export const adminPermissionSeeder = async () => {
  console.log('Running admin permission seeder...');
  const adminName = 'Admin Default';
  const encrypterProvider = new EncrypterProvider();

  const secondaryAdminName = 'Admin Secondary';

  const enc = encrypterProvider.encrypt({ content: adminName });

  const encSecondary = encrypterProvider.encrypt({ content: secondaryAdminName });

  const existingAdmin = await prisma.administrator.findFirst({
    where: {
      name: enc,
    },
  });

  if (!existingAdmin) return;

  const existingSecondaryAdmin = await prisma.administrator.findFirst({
    where: {
      name: encSecondary,
    },
  });

  if (!existingSecondaryAdmin) return;

  const existingAdminPermissions = await prisma.administratorPermission.findMany({
    where: {
      OR: [
        { administrator_id: existingAdmin.id_administrator },
        { administrator_id: existingSecondaryAdmin.id_administrator },
      ],
    },
  });

  if (existingAdminPermissions.length > 1) return;

  await prisma.administratorPermission.create({
    data: {
      administrator_id: existingAdmin.id_administrator,
      can_create_gyms: true,
      can_edit_gyms: true,
      can_delete_gyms: true,

      can_create_users: true,
      can_edit_users: true,
      can_delete_users: true,

      can_create_trainers: true,
      can_edit_trainers: true,
      can_delete_trainers: true,

      can_create_extra_services: true,
      can_edit_extra_services: true,
      can_delete_extra_services: true,

      can_create_sport_modalities: true,
      can_edit_sport_modalities: true,
      can_delete_sport_modalities: true,

      can_create_testimonies: true,
      can_edit_testimonies: true,
      can_delete_testimonies: true,

      can_create_gym_plans: true,
      can_edit_gym_plans: true,
      can_delete_gym_plans: true,

      can_create_administrators: true,
      can_edit_administrators: true,
      can_delete_administrators: true,
    },
  });

  await prisma.administratorPermission.create({
    data: {
      administrator_id: existingSecondaryAdmin.id_administrator,
      can_create_gyms: false,
      can_edit_gyms: false,
      can_delete_gyms: false,

      can_create_users: false,
      can_edit_users: false,
      can_delete_users: false,

      can_create_trainers: false,
      can_edit_trainers: false,
      can_delete_trainers: false,

      can_create_extra_services: false,
      can_edit_extra_services: false,
      can_delete_extra_services: false,

      can_create_sport_modalities: false,
      can_edit_sport_modalities: false,
      can_delete_sport_modalities: false,

      can_create_testimonies: false,
      can_edit_testimonies: false,
      can_delete_testimonies: false,

      can_create_gym_plans: false,
      can_edit_gym_plans: false,
      can_delete_gym_plans: false,

      can_create_administrators: false,
      can_edit_administrators: false,
      can_delete_administrators: false,
    },
  });
};
