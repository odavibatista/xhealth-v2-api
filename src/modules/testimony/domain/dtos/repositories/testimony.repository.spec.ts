import { TestimonyRepositoryInterface } from './testimony.repository';

describe('Testimony Repository Interface Test Suites', () => {
  const mockTestimonyRepositoryInterface: TestimonyRepositoryInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findByName: jest.fn(),
  };

  it('should have encryptedFields as an array of keys from Testimony', () => {
    expect(
      Array.isArray(mockTestimonyRepositoryInterface.encryptedFields),
    ).toBe(true);
  });

  it('should have findById method', () => {
    expect(typeof mockTestimonyRepositoryInterface.findById).toBe('function');
  });

  it('should have findByName method', () => {
    expect(typeof mockTestimonyRepositoryInterface.findByName).toBe('function');
  });
});
