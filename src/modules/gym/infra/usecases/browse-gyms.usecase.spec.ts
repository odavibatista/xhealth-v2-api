import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymRepository } from '../db/repositories/gym.repository';
import { BrowseGymsUsecase } from './browse-gyms.usecase';
import { faker } from '@faker-js/faker';

describe('Browse Gyms Use Case Test Suites', () => {
  let usecase: BrowseGymsUsecase;
  let mockRepository: GymRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new GymRepository(encrypterProvider);
    usecase = new BrowseGymsUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return an empty array when no gyms are found', async () => {
    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual([]);
  });

  it('should return a list of gyms when gyms are found', async () => {
    const mockGym = {
      id_gym: 'valid-id',
      name: faker.company.name(),
      address: {
        id_address: 'valid-address-id',
        cep: faker.location.zipCode(),
        street: faker.location.street(),
        complement: faker.location.secondaryAddress(),
        city: faker.location.city(),
        uf_id: faker.location.state(),
      },
      phone_number: faker.phone.number(),
      imageUrl: faker.image.url(),
      created_at: new Date().toISOString(),
    };

    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([mockGym]);

    const result = await usecase.execute();

    expect(result).toEqual([mockGym]);
  });
});
