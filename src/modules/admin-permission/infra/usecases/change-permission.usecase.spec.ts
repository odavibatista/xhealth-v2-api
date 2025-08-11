import { faker } from '@faker-js/faker';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { AdminPermissionRepository } from '../db/repositories/admin-permission.repository';
import { ChangePermissionUsecase } from './change-permission.usecase';
import { UnauthorizedException } from '@nestjs/common';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';

describe('Change Permission Use case Test Suites', () => {
  let usecase: ChangePermissionUsecase;
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
    usecase = new ChangePermissionUsecase(
      mockPermRepository,
      mockAdminRepository,
    );
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

  it('should remove permission if admin already has it', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValue(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValue(true);
    jest.spyOn(mockPermRepository, 'removePermission').mockResolvedValue(true);

    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    const result = await usecase.execute(data, faker.string.uuid());

    expect(result).toEqual({
      admin: {
        id_admin: data.admin_id,
        name: mockAdmin.name,
      },
      changed_permission: data.permission,
    });
    expect(mockPermRepository.removePermission).toHaveBeenCalledWith(
      data.admin_id,
      data.permission,
    );
  });

  it('should add permission if admin does not have it', async () => {
    jest
      .spyOn(mockAdminRepository, 'findById')
      .mockResolvedValue(mockAdmin as any);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValueOnce(true);
    jest.spyOn(mockPermRepository, 'hasPermission').mockResolvedValue(false);
    jest.spyOn(mockPermRepository, 'addPermission').mockResolvedValue(true);

    const data = {
      admin_id: mockAdmin.id_administrator,
      permission: 'can_edit_administrators',
    };

    const result = await usecase.execute(data, faker.string.uuid());

    expect(result).toEqual({
      admin: {
        id_admin: data.admin_id,
        name: mockAdmin.name,
      },
      changed_permission: data.permission,
    });
    expect(mockPermRepository.addPermission).toHaveBeenCalledWith(
      data.admin_id,
      data.permission,
    );
  });
});
