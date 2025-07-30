import { AdministratorRepositoryInterface } from './administrator.repository';

describe('Administrator Repository Interface Test Suites', () => {
  const mockAdministratorRepositoryInterface: AdministratorRepositoryInterface =
    {
      encryptedFields: [],
      findById: jest.fn(),
      findByEmail: jest.fn(),
    };

  it('should have encryptedFields as an array of keys from Administrator', () => {
    expect(
      Array.isArray(mockAdministratorRepositoryInterface.encryptedFields),
    ).toBe(true);
  });

  it('should have findById method', () => {
    expect(typeof mockAdministratorRepositoryInterface.findById).toBe(
      'function',
    );
  });

  it('should have findByEmail method', () => {
    expect(typeof mockAdministratorRepositoryInterface.findByEmail).toBe(
      'function',
    );
  });
});
