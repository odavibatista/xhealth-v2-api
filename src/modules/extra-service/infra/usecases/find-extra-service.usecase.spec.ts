import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';
import { FindExtraServiceUsecase } from './find-extra-service.usecase';
import { ServiceNotFoundException } from '../../domain/dtos/errors/ServiceNotFound.exception';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { faker } from '@faker-js/faker'

describe('Find Extra Service By ID Usecase', () => {
  let usecase: FindExtraServiceUsecase;
  let mockRepository: ExtraServiceRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new ExtraServiceRepository(encrypterProvider);
    usecase = new FindExtraServiceUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should not find a service given an invalid ID', async () => {
    const invalidId = 'invalid-id';

    jest.spyOn(mockRepository, 'findById').mockResolvedValueOnce(null);

    expect(async () => {
      await usecase.execute(invalidId);
    }).rejects.toThrow(ServiceNotFoundException);
  });

  it('should find a service by ID', async () => {
    const validId = 'valid-id';
    const mockService = {
      id_extra_service: validId,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      imageUrl: faker.image.url(),
    };

    jest
      .spyOn(mockRepository, 'findById')
      .mockResolvedValueOnce(mockService as any);

    const result = await usecase.execute(validId);

    expect(result).toEqual({
      id_extra_service: validId,
      name: mockService.name,
      description: mockService.description,
      price: mockService.price,
      imageUrl: mockService.imageUrl,
    });
  });
});
