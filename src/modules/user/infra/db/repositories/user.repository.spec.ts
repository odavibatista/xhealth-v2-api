import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../../address/infra/db/repositories/address.repository';
import { UserRepository } from './user.repository';

describe('User Repository Test Suites', () => {
  let repository: UserRepository;
  let addressRepository = new AddressRepository();

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new UserRepository(
      new EncrypterProvider(),
      addressRepository
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockUser = {
    id_user: 'valid-id',
    email: 'valid-email',
    phone_number: 'valid-phone',
    name: 'Valid Name',
    createdAt: new Date(),
    address: {
      id_address: 'valid-address-id',
      cep: 'valid-cep',
      street: 'valid-street',
      number: 'valid-number',
      complement: 'valid-complement',
      city: 'valid-city',
      uf: {
        id_uf: 'valid-uf-id',
        name: 'Valid UF Name',
        acronym: 'VU',
        ibge_id: 'valid-ibge-id',
      },
    },
  }

  describe('findById method tests', () => {
    it('should not find a user given an invalid ID', async () => {
      const invalidId = 'invalid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(invalidId);

      expect(result).toBeNull();
      expect(repository.findById).toHaveBeenCalledWith(invalidId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });

    it('should find a user by ID', async () => {
      const validId = 'valid-id';

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(mockUser);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockUser);
      expect(repository.findById).toHaveBeenCalledWith(validId);
      expect(repository.findById).toHaveBeenCalledTimes(1);
    });
  })

  describe('findByEmail method tests', () => {
    it('should not find a user given an invalid email', async () => {
      const invalidEmail = 'invalid-email';

      jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(null);

      const result = await repository.findByEmail(invalidEmail);

      expect(result).toBeNull();
      expect(repository.findByEmail).toHaveBeenCalledWith(invalidEmail);
      expect(repository.findByEmail).toHaveBeenCalledTimes(1);
    });

    it('should find a user by email', async () => {
      const validEmail = 'valid-email';

      jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(mockUser);

      const result = await repository.findByEmail(validEmail);

      expect(result).toEqual(mockUser);
      expect(repository.findByEmail).toHaveBeenCalledWith(validEmail);
      expect(repository.findByEmail).toHaveBeenCalledTimes(1);
    });
  })

  describe('findByPhoneNumber method tests', () => {
    it('should not find a user given an invalid phone number', async () => {
      const invalidPhoneNumber = 'invalid-phone';

      jest.spyOn(repository, 'findByPhoneNumber').mockResolvedValueOnce(null);

      const result = await repository.findByPhoneNumber(invalidPhoneNumber);

      expect(result).toBeNull();
      expect(repository.findByPhoneNumber).toHaveBeenCalledWith(invalidPhoneNumber);
      expect(repository.findByPhoneNumber).toHaveBeenCalledTimes(1);
    });

    it('should find a user by phone number', async () => {
      const validPhoneNumber = 'valid-phone';

      jest.spyOn(repository, 'findByPhoneNumber').mockResolvedValueOnce(mockUser);

      const result = await repository.findByPhoneNumber(validPhoneNumber);

      expect(result).toEqual(mockUser);
      expect(repository.findByPhoneNumber).toHaveBeenCalledWith(validPhoneNumber);
      expect(repository.findByPhoneNumber).toHaveBeenCalledTimes(1);
    });
  })

  describe('findByUsername method tests', () => {
    it('should not find a user given an invalid username', async () => {
      const invalidUsername = 'invalid-username';

      jest.spyOn(repository, 'findByUsername').mockResolvedValueOnce(null);

      const result = await repository.findByUsername(invalidUsername);

      expect(result).toBeNull();
      expect(repository.findByUsername).toHaveBeenCalledWith(invalidUsername);
      expect(repository.findByUsername).toHaveBeenCalledTimes(1);
    });

    it('should find a user by username', async () => {
      const validUsername = 'valid-username';

      jest.spyOn(repository, 'findByUsername').mockResolvedValueOnce([mockUser]);

      const result = await repository.findByUsername(validUsername);

      expect(result).toEqual([mockUser]);
      expect(repository.findByUsername).toHaveBeenCalledWith(validUsername);
      expect(repository.findByUsername).toHaveBeenCalledTimes(1);
    });
  })

  describe('setPassword method tests', () => {
    it('should not set a password for an invalid user ID', async () => {
      const invalidId = 'invalid-id';
      const password = 'new-password';

      jest.spyOn(repository, 'setPassword').mockResolvedValueOnce(null);

      const result = await repository.setPassword(invalidId, password);

      expect(result).toBeNull();
      expect(repository.setPassword).toHaveBeenCalledWith(invalidId, password);
      expect(repository.setPassword).toHaveBeenCalledTimes(1);
    });

    it('should set a password for a valid user ID', async () => {
      const validId = 'valid-id';
      const password = 'new-password';

      jest.spyOn(repository, 'setPassword').mockResolvedValueOnce(mockUser);

      const result = await repository.setPassword(validId, password);

      expect(result).toEqual(mockUser);
      expect(repository.setPassword).toHaveBeenCalledWith(validId, password);
      expect(repository.setPassword).toHaveBeenCalledTimes(1);
    });
  });
});
