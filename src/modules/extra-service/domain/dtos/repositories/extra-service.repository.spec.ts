import { ExtraServiceRepositoryInterface } from './extra-service.repository';

describe('Extra Service Repository Interface Test Suites', () => {
  const mockInterface: ExtraServiceRepositoryInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findAll: jest.fn(),
  };

  it('should have an encryptedFields property', () => {
    expect(mockInterface.encryptedFields).toBeDefined();
  });

  it('should have a findById method', () => {
    expect(typeof mockInterface.findById).toBe('function');
  });

  it('should have a findAll method', () => {
    expect(typeof mockInterface.findAll).toBe('function');
  });
});
