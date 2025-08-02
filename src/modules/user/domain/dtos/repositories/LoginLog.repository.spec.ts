import { LoginLogRepositoryInterface } from './LoginLog.repository';

describe('Login Log Repository Interface Test Suites', () => {
  const mockInterface: LoginLogRepositoryInterface = {
    create: jest.fn(),
    getLastLoginAttempt: jest.fn(),
    updateLastLoginAttempt: jest.fn(),
  };

  it('should have create method defined', () => {
    expect(mockInterface.create).toBeDefined();
    expect(typeof mockInterface.create).toBe('function');
  });

  it('should have getLastLoginAttempt method defined', () => {
    expect(mockInterface.getLastLoginAttempt).toBeDefined();
    expect(typeof mockInterface.getLastLoginAttempt).toBe('function');
  });

  it('should have updateLastLoginAttempt method defined', () => {
    expect(mockInterface.updateLastLoginAttempt).toBeDefined();
    expect(typeof mockInterface.updateLastLoginAttempt).toBe('function');
  });
});
