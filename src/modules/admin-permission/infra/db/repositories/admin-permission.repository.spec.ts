import { AdminPermissionRepository } from './admin-permission.repository';

describe('Admin Permissions Repository Test Suites', () => {
  let repository: AdminPermissionRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new AdminPermissionRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockAdminPermission = {
    administrator_id: 'valid-admin-id',
    can_create_users: true,
    can_delete_users: false,
    created_at: new Date(),
    updated_at: new Date(),
  };

  describe('findById method tests', () => {
    it('should not find an admin permission given an invalid ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findByAdminId').mockResolvedValueOnce(null);

      const result = await repository.findByAdminId(invalidId);

      expect(result).toBeNull();
      expect(repository.findByAdminId).toHaveBeenCalledWith(invalidId);
      expect(repository.findByAdminId).toHaveBeenCalledTimes(1);
    });

    it('should find an admin permission row given a valid ID', async () => {
      const validId = 'valid-admin-id';

      jest
        .spyOn(repository, 'findByAdminId')
        .mockResolvedValueOnce(mockAdminPermission);

      const result = await repository.findByAdminId(validId);

      expect(result).toEqual(mockAdminPermission);
      expect(repository.findByAdminId).toHaveBeenCalledWith(validId);
      expect(repository.findByAdminId).toHaveBeenCalledTimes(1);
    });
  });

  describe('addPermission method tests', () => {
    it('should not add a permission if admin permission does not exist', async () => {
      const adminId = 'non-existent-admin-id';
      const permission = 'can_fly_a_gunship';

      jest.spyOn(repository, 'addPermission').mockResolvedValueOnce(false);
      const result = await repository.addPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.addPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.addPermission).toHaveBeenCalledTimes(1);
    });

    it('should not add a permission if the admin-id is invalid', async () => {
      const adminId = 'invalid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'addPermission').mockResolvedValueOnce(false);

      const result = await repository.addPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.addPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.addPermission).toHaveBeenCalledTimes(1);
    });

    it('should not add a permission if the permission already exists', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'addPermission').mockResolvedValueOnce(false);

      const result = await repository.addPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.addPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.addPermission).toHaveBeenCalledTimes(1);
    });

    it('should add a permission if the admin permission exists and the permission is false', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'addPermission').mockResolvedValueOnce(true);

      const result = await repository.addPermission(adminId, permission);

      expect(result).toBe(true);
      expect(repository.addPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.addPermission).toHaveBeenCalledTimes(1);
    });
  });

  describe('removePermission method tests', () => {
    it('should not remove a permission if admin permission does not exist', async () => {
      const adminId = 'non-existent-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'removePermission').mockResolvedValueOnce(false);

      const result = await repository.removePermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.removePermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.removePermission).toHaveBeenCalledTimes(1);
    });

    it('should not remove a permission if the admin-id is invalid', async () => {
      const adminId = 'invalid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'removePermission').mockResolvedValueOnce(false);

      const result = await repository.removePermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.removePermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.removePermission).toHaveBeenCalledTimes(1);
    });

    it('should not remove a permission if the permission is already false', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'can_delete_users';

      jest.spyOn(repository, 'removePermission').mockResolvedValueOnce(false);

      const result = await repository.removePermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.removePermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.removePermission).toHaveBeenCalledTimes(1);
    });

    it('should remove a permission if the admin permission exists and the permission is true', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'removePermission').mockResolvedValueOnce(true);

      const result = await repository.removePermission(adminId, permission);

      expect(result).toBe(true);
      expect(repository.removePermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.removePermission).toHaveBeenCalledTimes(1);
    });
  });

  describe('hasPermission method tests', () => {
    it('should return false if admin permission does not exist', async () => {
      const adminId = 'non-existent-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'hasPermission').mockResolvedValueOnce(false);

      const result = await repository.hasPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.hasPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.hasPermission).toHaveBeenCalledTimes(1);
    });

    it('should return false if the admin-id is invalid', async () => {
      const adminId = 'invalid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'hasPermission').mockResolvedValueOnce(false);

      const result = await repository.hasPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.hasPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.hasPermission).toHaveBeenCalledTimes(1);
    });

    it('should return false if the permission does not exist', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'non_existent_permission';

      jest.spyOn(repository, 'hasPermission').mockResolvedValueOnce(false);

      const result = await repository.hasPermission(adminId, permission);

      expect(result).toBe(false);
      expect(repository.hasPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.hasPermission).toHaveBeenCalledTimes(1);
    });

    it('should return true if the admin has the specified permission', async () => {
      const adminId = 'valid-admin-id';
      const permission = 'can_create_users';

      jest.spyOn(repository, 'hasPermission').mockResolvedValueOnce(true);

      const result = await repository.hasPermission(adminId, permission);

      expect(result).toBe(true);
      expect(repository.hasPermission).toHaveBeenCalledWith(
        adminId,
        permission,
      );
      expect(repository.hasPermission).toHaveBeenCalledTimes(1);
    });
  });
});
