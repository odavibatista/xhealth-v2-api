import { UnauthorizedException } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';
import { AddPermissionUsecase } from './add-permission.usecase';
import { faker } from '@faker-js/faker';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { PermissionAlreadySetException } from '../../domain/dtos/errors/PermissionAlreadySet.exception.dto';

describe('Add Permission Usecase Test Suites', () => {
  let usecase: AddPermissionUsecase;
  let mockPermRepository: AdminPermissionRepository;
  let mockAdminRepository: AdministratorRepository;
  let encrypterProvider: EncrypterProvider;
  let hashProvider: HashProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    hashProvider = new HashProvider();

    mockAdminRepository = new AdministratorRepository(
      encrypterProvider,
      hashProvider,
    );

    mockPermRepository = new AdminPermissionRepository();
    usecase = new AddPermissionUsecase(mockPermRepository, mockAdminRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockAdmin = {
    id_administrator: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: 'admin',
    created_at: new Date(),
  };

  const mockPermission = {
    id_administrator_permission: faker.string.uuid(),
    administrator_id: mockAdmin.id_administrator,

    can_create_administrators: true,
    can_edit_administrators: true,
  };

  it('should throw UnauthorizedException if requesting admin ID is the same as admin ID', async () => {
    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    await expect(
      usecase.execute(data, mockAdmin.id_administrator),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should throw UnauthorizedException if requesting admin does not exist', async () => {
    const data = {
      admin_id: faker.string.uuid(),
      permission: 'can_edit_administrators',
    };

    await expect(usecase.execute(data, faker.string.uuid())).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('should throw UnauthorizedException if requesting admin does not have permission to edit administrators', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValue(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValue(false);

    const data = {
      admin_id: faker.string.uuid(),
      permission: 'can_edit_administrators',
    };

    await expect(usecase.execute(data, faker.string.uuid())).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('should throw AccountNotFoundException if admin to be modified does not exist', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValueOnce(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValue(true);
    jest.spyOn(mockAdminRepository, 'findById').mockResolvedValue(null);

    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    await expect(usecase.execute(data, faker.string.uuid())).rejects.toThrow(
      AccountNotFoundException,
    );
  });

  it('should throw PermissionAlreadySetException if permission is already set for the admin', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValueOnce(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValue(true);
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValue(mockAdmin as any);

    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    await expect(usecase.execute(data, faker.string.uuid())).rejects.toThrow(
      PermissionAlreadySetException,
    );
  });

  it('should add permission if not already set', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValueOnce(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValueOnce(true);
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValue(mockAdmin as any);
    jest
      .spyOn(mockPermRepository, 'hasPermission')
      .mockResolvedValueOnce(false);
    jest.spyOn(mockPermRepository, 'addPermission').mockResolvedValue(true);

    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    const result = await usecase.execute(data, faker.string.uuid());

    expect(result).toEqual({
      admin: {
        id_admin: mockAdmin.id_administrator,
        name: mockAdmin.name,
      },
      added_permission: data.permission,
    });
  });
});
