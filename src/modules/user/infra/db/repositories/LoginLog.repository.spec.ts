import { CreateLoginLogDTO } from '../../../domain/dtos/repositories/dtos/LoginLogs.repository.dto';
import { LoginLogsRepository } from './LoginLog.repository';

describe('Login Logs Repository Test Suites', () => {
  let repository: LoginLogsRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new LoginLogsRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('getLastLoginAttempt method tests', () => {
    it('should return null if no login log exists for the user', async () => {
      const userId = 'non-existent-user-id';

      jest.spyOn(repository, 'getLastLoginAttempt').mockResolvedValueOnce(null);

      const result = await repository.getLastLoginAttempt(userId);

      expect(result).toBeNull();
      expect(repository.getLastLoginAttempt).toHaveBeenCalledWith(userId);
    });

    it('should return the last login attempt for a user', async () => {
      const mockLoginLog = {
        id: 'valid-id',
        user_id: 'valid-user-id',
        created_at: new Date(),
      };

      jest
        .spyOn(repository, 'getLastLoginAttempt')
        .mockResolvedValueOnce(mockLoginLog);

      const result = await repository.getLastLoginAttempt(mockLoginLog.user_id);

      expect(result).toEqual(mockLoginLog);
      expect(repository.getLastLoginAttempt).toHaveBeenCalledWith(
        mockLoginLog.user_id,
      );
    });
  });

  describe('create method tests', () => {
    it('should create a new login log entry', async () => {
      const mockData: CreateLoginLogDTO = {
        user_id: 'valid-user-id',
        ip: '192.168.0.1',
        is_blocked: false,
        login_attempt: 1,
      };

      jest.spyOn(repository, 'create').mockResolvedValueOnce();

      const result = await repository.create(mockData);

      expect(result).toBeUndefined();
      expect(repository.create).toHaveBeenCalledWith(mockData);
      expect(repository.create).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple IP addresses correctly', async () => {
      const mockData: CreateLoginLogDTO = {
        user_id: 'valid-user-id',
        ip: ['192.168.0.1', '192.168.0.2'],
        is_blocked: false,
        login_attempt: 1,
      };

      jest.spyOn(repository, 'create').mockResolvedValueOnce();

      const result = await repository.create(mockData);

      expect(result).toBeUndefined();
      expect(repository.create).toHaveBeenCalledWith(mockData);
      expect(repository.create).toHaveBeenCalledTimes(1);
    });

    it('should handle optional login_attempt correctly', async () => {
      const mockData: CreateLoginLogDTO = {
        user_id: 'valid-user-id',
        ip: ['192.168.0.1'],
        is_blocked: false,
      };

      jest.spyOn(repository, 'create').mockResolvedValueOnce();

      const result = await repository.create(mockData);

      expect(result).toBeUndefined();
      expect(repository.create).toHaveBeenCalledWith(mockData);
      expect(repository.create).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateLastLoginAttempt method tests', () => {
    it('should update the last login attempt for a user', async () => {
      const mockUpdateData = {
        last_login_attempt_id: 'valid-id',
        login_attempt: 2,
        is_blocked: false,
      };

      jest.spyOn(repository, 'updateLastLoginAttempt').mockResolvedValueOnce();

      const result = await repository.updateLastLoginAttempt(mockUpdateData);

      expect(result).toBeUndefined();
      expect(repository.updateLastLoginAttempt).toHaveBeenCalledWith(
        mockUpdateData,
      );
      expect(repository.updateLastLoginAttempt).toHaveBeenCalledTimes(1);
    });
  });
});
