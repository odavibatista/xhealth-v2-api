import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymPlanNotFoundException } from '../../domain/dtos/errors/GymPlanNotFound.exception';
import { GymPlanFeatureRepository } from '../db/repositories/gym-plan-feature.repository';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { FindGymPlanByIdUsecase } from './find-gym-plan-by-id.usecase';
import { faker } from '@faker-js/faker';

describe('Find Gym Plan By ID Use Case', () => {
  let usecase: FindGymPlanByIdUsecase;
  let mockRepository: GymPlanRepository;
  let mockGymPlanFeatRepo: GymPlanFeatureRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new GymPlanRepository(encrypterProvider);
    mockGymPlanFeatRepo = new GymPlanFeatureRepository();
    usecase = new FindGymPlanByIdUsecase(mockRepository, mockGymPlanFeatRepo);
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
    features: []
  };

  it('should return null when no gym plan is found for the given ID', async () => {
    const invalidId = 'invalid-id';

    jest.spyOn(mockRepository, 'findById').mockResolvedValueOnce(null);

    expect(async () => {
      await usecase.execute(invalidId);
    }).rejects.toThrow(GymPlanNotFoundException);
  });

  it('should return the gym plan when found by ID', async () => {
    const validId = 'valid-id';

    jest
      .spyOn(mockRepository, 'findById')
      .mockResolvedValueOnce(mockGymPlan as any);

    jest.spyOn(mockGymPlanFeatRepo, 'findByGymPlanId').mockResolvedValueOnce([]);

    const result = await usecase.execute(validId);

    expect(result).toEqual(mockGymPlan);
    expect(mockRepository.findById).toHaveBeenCalledWith(validId);
    expect(mockRepository.findById).toHaveBeenCalledTimes(1);
  });
});
