import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymPlanFeatureRepository } from '../db/repositories/gym-plan-feature.repository';
import { GymPlanRepository } from '../db/repositories/gym-plan.repository';
import { BrowseGymPlansUsecase } from './browse-gym-plans.usecase';
import { faker } from '@faker-js/faker';

describe('Browse Gym Plans Use Case Test Suites', () => {
  let usecase: BrowseGymPlansUsecase;
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
    usecase = new BrowseGymPlansUsecase(mockRepository, mockGymPlanFeatRepo);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return an empty array when no gym plans are found', async () => {
    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual([]);
  });

  it('should return a list of gym plans', async () => {
    const mockPlans = [
      {
        id_gym_plan: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        duration: '3 months',
        features: [],
      },
      {
        id_gym_plan: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        duration: '6 months',
        features: [],
      },
      {
        id_gym_plan: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        duration: '12 months',
        features: [],
      },
    ];

    jest
      .spyOn(mockRepository, 'findAll')
      .mockResolvedValueOnce(mockPlans as any);

    jest.spyOn(mockGymPlanFeatRepo, 'findByGymPlanId').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual(mockPlans);
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
