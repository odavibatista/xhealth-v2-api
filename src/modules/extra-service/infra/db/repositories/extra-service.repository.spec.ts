import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { ExtraServiceRepository } from './extra-service.repository';
import { faker } from '@faker-js/faker';

describe('Extra Service Repository Test Suites', () => {
  let repository: ExtraServiceRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new ExtraServiceRepository(new EncrypterProvider());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockExtraService = {
    id_extra_service: 'valid-id',
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: faker.image.url(),
  };

  describe('findById method tests', () => {
    it('should not find a service given an invalid ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(invalidId);

      expect(result).toBeNull();
      expect(repository.findById).toHaveBeenCalledWith(invalidId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });

    it('should find a service by ID', async () => {
      const validId = 'valid-id';

      jest
        .spyOn(repository, 'findById')
        .mockResolvedValueOnce(mockExtraService as any);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockExtraService);
      expect(repository.findById).toHaveBeenCalledWith(validId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
  });
});
