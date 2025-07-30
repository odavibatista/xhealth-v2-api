import { UserRepositoryInterface } from './user.repository';

describe('User Repository Interface Test Suites', () => {
  const mockUserRepositoryInterface: UserRepositoryInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findByEmail: jest.fn(),
    findByPhoneNumber: jest.fn(),
    findByUsername: jest.fn(),
    setPassword: jest.fn(),
  };

  it('should have encryptedFields as an array of keys from User', () => {
    expect(Array.isArray(mockUserRepositoryInterface.encryptedFields)).toBe(
      true,
    );
  });

  it('should have findById method', () => {
    expect(typeof mockUserRepositoryInterface.findById).toBe('function');
  });

  it('should have findByEmail method', () => {
    expect(typeof mockUserRepositoryInterface.findByEmail).toBe('function');
  });

  it('should have findByPhoneNumber method', () => {
    expect(typeof mockUserRepositoryInterface.findByPhoneNumber).toBe(
      'function',
    );
  });

  it('should have findByUsername method', () => {
    expect(typeof mockUserRepositoryInterface.findByUsername).toBe('function');
  });

  it('should have setPassword method', () => {
    expect(typeof mockUserRepositoryInterface.setPassword).toBe('function');
  });
});
