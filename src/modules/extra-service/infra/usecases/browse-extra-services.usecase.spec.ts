import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';
import { BrowseExtraServicesUsecase } from './browse-extra-services.usecase';
import { faker } from '@faker-js/faker';

describe('Browse Extra Services Use Case', () => {
  let usecase: BrowseExtraServicesUsecase;
  let mockRepository: ExtraServiceRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new ExtraServiceRepository(encrypterProvider);
    usecase = new BrowseExtraServicesUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return an empty array when no extra services are found', async () => {
    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual([]);
  });

  it('should return a list of extra services', async () => {
    const mockServices = [
      {
        id_extra_service: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: faker.image.url(),
      },
      {
        id_extra_service: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: faker.image.url(),
      },
      {
        id_extra_service: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: faker.image.url(),
      },
    ];

    jest
      .spyOn(mockRepository, 'findAll')
      .mockResolvedValueOnce(mockServices as any);

    const result = await usecase.execute();

    expect(result).toEqual(mockServices);
  });
});
