import { SportModalityInterface } from './sport-modality.repository';

describe('Sport Modality Repository Interface Test Suites', () => {
  const mockSportModalityRepositoryInterface: SportModalityInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findByName: jest.fn(),
  };

  it('should have encryptedFields as an array of keys from SportModality', () => {
    expect(
      Array.isArray(mockSportModalityRepositoryInterface.encryptedFields),
    ).toBe(true);
  });

  it('should have findById method', () => {
    expect(typeof mockSportModalityRepositoryInterface.findById).toBe(
      'function',
    );
  });

  it('should have findByName method', () => {
    expect(typeof mockSportModalityRepositoryInterface.findByName).toBe(
      'function',
    );
  });
});
