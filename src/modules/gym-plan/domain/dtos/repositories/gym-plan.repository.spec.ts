import { GymPlanRepositoryInterface } from './gym-plan.repository';

describe('Gym Plan Repository Interface Test Suites', () => {
  const mockGymPlanRepositoryInterface: GymPlanRepositoryInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findByName: jest.fn(),
  };

  it('should have encryptedFields as an array of keys from GymPlan', () => {
    expect(Array.isArray(mockGymPlanRepositoryInterface.encryptedFields)).toBe(
      true,
    );
  });

  it('should have findById method', () => {
    expect(typeof mockGymPlanRepositoryInterface.findById).toBe('function');
  });

  it('should have findByName method', () => {
    expect(typeof mockGymPlanRepositoryInterface.findByName).toBe('function');
  });
});
