import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { GymPlanRepository } from './gym-plan.repository';
import { faker } from '@faker-js/faker';

describe('Gym Plan Repository Test Suites', () => {
  let repository: GymPlanRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new GymPlanRepository(new EncrypterProvider());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockGymPlan = {
    id_gym_plan: 'valid-id',
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    duration: '3 months',
  };

  describe('findById method tests', () => {
    it('should not find a plan given an invalid ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(invalidId);

      expect(result).toBeNull();
      expect(repository.findById).toHaveBeenCalledWith(invalidId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });

    it('should find a plan by ID', async () => {
      const validId = 'valid-id';

      jest
        .spyOn(repository, 'findById')
        .mockResolvedValueOnce(mockGymPlan as any);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockGymPlan);
      expect(repository.findById).toHaveBeenCalledWith(validId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
  });

  describe('findAll method tests', () => {
    it('should return an array of all plans', async () => {
      jest
        .spyOn(repository, 'findAll')
        .mockResolvedValueOnce([mockGymPlan] as any);

      const result = await repository.findAll();

      expect(result).toEqual([mockGymPlan]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no plans are found', async () => {
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce([]);

      const result = await repository.findAll();

      expect(result).toEqual([]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByName method tests', () => {
    it('should return an array of plans matching the name', async () => {
      const nameQuery = 'Basic';

      jest
        .spyOn(repository, 'findByName')
        .mockResolvedValueOnce([mockGymPlan] as any);

      const result = await repository.findByName(nameQuery);

      expect(result).toEqual([mockGymPlan]);
      expect(repository.findByName).toHaveBeenCalledWith(nameQuery);
      expect(repository.findByName).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array if no plans match the name', async () => {
      const nameQuery = 'NonExistentPlan';

      jest.spyOn(repository, 'findByName').mockResolvedValueOnce([]);

      const result = await repository.findByName(nameQuery);

      expect(result).toEqual([]);
      expect(repository.findByName).toHaveBeenCalledWith(nameQuery);
      expect(repository.findByName).toHaveBeenCalledTimes(1);
    });
  });
});
