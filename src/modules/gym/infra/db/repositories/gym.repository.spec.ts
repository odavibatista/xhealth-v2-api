import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../../address/infra/db/repositories/address.repository';
import { GymRepository } from './gym.repository';
import { faker } from '@faker-js/faker';

describe('Gym Repository Test Suites', () => {
  let repository: GymRepository;
  let addressRepository: AddressRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    encrypterProvider = new EncrypterProvider();
    addressRepository = new AddressRepository(encrypterProvider);
    repository = new GymRepository(encrypterProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

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

  describe('findAll method test suites', () => {
    it('should return an empty array when no gyms are found', async () => {
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce([]);

      const result = await repository.findAll();

      expect(result).toEqual([]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return a list of gyms', async () => {
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce([mockGym]);

      const result = await repository.findAll();

      expect(result).toEqual([mockGym]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findById method test suites', () => {
    it('should return null when no gym is found for the given ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(invalidId);

      expect(result).toBeNull();
      expect(repository.findById).toHaveBeenCalledWith(invalidId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });

    it('should return a gym when a valid ID is provided', async () => {
      const validId = 'valid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(mockGym as any);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockGym);
      expect(repository.findById).toHaveBeenCalledWith(validId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
  });

  describe('findByPhoneNumber method test suites', () => {
    it('should return null when no gym is found for the given phone number', async () => {
      const invalidPhoneNumber = 'invalid-phone';

      jest.spyOn(repository, 'findByPhoneNumber').mockResolvedValueOnce(null);

      const result = await repository.findByPhoneNumber(invalidPhoneNumber);

      expect(result).toBeNull();
      expect(repository.findByPhoneNumber).toHaveBeenCalledWith(invalidPhoneNumber);
      expect(repository.findByPhoneNumber).toHaveBeenCalledTimes(1);
    });

    it('should return a gym when a valid phone number is provided', async () => {
      const validPhoneNumber = mockGym.phone_number;

      jest.spyOn(repository, 'findByPhoneNumber').mockResolvedValueOnce(mockGym as any);

      const result = await repository.findByPhoneNumber(validPhoneNumber);

      expect(result).toEqual(mockGym);
      expect(repository.findByPhoneNumber).toHaveBeenCalledWith(validPhoneNumber);
      expect(repository.findByPhoneNumber).toHaveBeenCalledTimes(1);
    });
  });
});
