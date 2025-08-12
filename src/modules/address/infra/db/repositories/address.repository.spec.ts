import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from './address.repository';
import { faker } from '@faker-js/faker';

describe('Address Repository Test Suites', () => {
  let repository: AddressRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    encrypterProvider = new EncrypterProvider();
    repository = new AddressRepository(encrypterProvider);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockAddress = {
    id_address: faker.string.uuid(),
    cep: faker.location.zipCode(),
    street: faker.location.street(),
    number: faker.string.numeric(),
    complement: faker.location.secondaryAddress(),
    city: faker.location.city(),
    uf_id: faker.string.uuid(),
  };

  describe('findById method test suites', () => {
    it('should return an address if found', async () => {
      jest.spyOn(repository, 'findById').mockResolvedValueOnce(mockAddress);

      const result = await repository.findById(mockAddress.id_address);

      expect(result).toEqual(mockAddress);
    });

    it('should return null if not found', async () => {
      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById('invalid-id');

      expect(result).toBeNull();
    });
  });

  describe('edit method test suites', () => {
    it('should return null if address is not found', async () => {
      jest.spyOn(repository, 'edit').mockResolvedValueOnce(null);

      const result = await repository.edit('invalid-id', {
        cep: faker.location.zipCode(),
        street: faker.location.street(),
        number: faker.string.numeric(),
        complement: faker.location.secondaryAddress(),
        city: faker.location.city(),
        uf_id: faker.string.uuid(),
      });

      expect(result).toBeNull();
    });

    it('should return the updated address if successful', async () => {
      jest.spyOn(repository, 'edit').mockResolvedValueOnce(mockAddress);

      const result = await repository.edit(mockAddress.id_address, {
        cep: faker.location.zipCode(),
        street: faker.location.street(),
        number: faker.string.numeric(),
        complement: faker.location.secondaryAddress(),
        city: faker.location.city(),
        uf_id: faker.string.uuid(),
      });

      expect(result).toEqual(mockAddress);
    });
  });

  describe('delete method test suites', () => {
    it('should return true when address is successfully deleted', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValueOnce(true);

      const result = await repository.delete(mockAddress.id_address);

      expect(result).toBe(true);
    });

    it('should return false when address deletion fails', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValueOnce(false);

      const result = await repository.delete('invalid-id');

      expect(result).toBe(false);
    });
  });
});
