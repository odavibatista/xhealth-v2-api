import { GymPlanFeatureRepository } from './gym-plan-feature.repository';

describe('Gym Plan Feature Repository Test Suites', () => {
  let repository: GymPlanFeatureRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new GymPlanFeatureRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockGymPlanFeature = {
    id_gym_plan_feature: 'valid-id',
    gym_plan_id: 'valid-gym-plan-id',
    feature_name: 'Access to gym',
  };

  describe('findById method tests', () => {
    it('should not find a gym plan feature given an invalid ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(invalidId);

      expect(result).toBeNull();
      expect(repository.findById).toHaveBeenCalledWith(invalidId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
    it('should find a gym plan feature by ID', async () => {
      const validId = 'valid-id';

      jest
        .spyOn(repository, 'findById')
        .mockResolvedValueOnce(mockGymPlanFeature as any);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockGymPlanFeature);
      expect(repository.findById).toHaveBeenCalledWith(validId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByGymPlanId method tests', () => {
    it('should return an array of gym plan features by gym plan ID', async () => {
      const validGymPlanId = 'valid-gym-plan-id';

      jest
        .spyOn(repository, 'findByGymPlanId')
        .mockResolvedValueOnce([mockGymPlanFeature] as any);

      const result = await repository.findByGymPlanId(validGymPlanId);

      expect(result).toEqual([mockGymPlanFeature]);
      expect(repository.findByGymPlanId).toHaveBeenCalledWith(validGymPlanId);
      expect(repository.findByGymPlanId).toHaveBeenCalledTimes(1);
    });
  });
});
