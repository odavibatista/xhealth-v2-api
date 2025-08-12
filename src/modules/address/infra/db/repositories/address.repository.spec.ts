import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from './address.repository';

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
      id_address: 'valid-address-id',
      cep: '12345678',
      street: 'Rua Exemplo',
      number: '123',
      complement: 'Apto 1',
      city: 'Cidade Exemplo',
      uf_id: 'SP',
    };

    describe('findById method test suites', () => {
      it('should return an address if found', async () => {
        jest
          .spyOn(repository, 'findById')
          .mockResolvedValueOnce(mockAddress);

        const result = await repository.findById(mockAddress.id_address);

        expect(result).toEqual(mockAddress);
      });

      it('should return null if not found', async () => {
        jest
          .spyOn(repository, 'findById')
          .mockResolvedValueOnce(null);

        const result = await repository.findById('invalid-id');

        expect(result).toBeNull();
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
