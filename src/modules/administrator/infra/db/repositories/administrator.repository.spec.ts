import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { HashProvider } from '../../../../user/infra/providers/hash.provider';
import { AdministratorRepository } from './administrator.repository';

describe('Administrator Repository Test Suites', () => {
  let repository: AdministratorRepository;

    beforeEach(() => {
      jest.useFakeTimers({ doNotFake: ['nextTick'] });
    });
  
    beforeEach(() => {
      repository = new AdministratorRepository(new EncrypterProvider(), new HashProvider());
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    afterAll(() => {
      jest.useRealTimers();
    });

    const mockAdmin = {
      id_administrator: 'valid-id',
      email: 'valid-email',
      name: 'Valid Name',
      role: 'admin',
      created_at: new Date(),
    }

    describe('findById method tests', () => {
      it('should not find an administrator given an invalid ID', async () => {
        const invalidId = 'invalid-id';

        jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

        const result = await repository.findById(invalidId);

        expect(result).toBeNull();
        expect(repository.findById).toHaveBeenCalledWith(invalidId);
        expect(repository.findById).toHaveBeenCalledTimes(1);
      });

      it('should find an administrator by ID', async () => {
        jest.spyOn(repository, 'findById').mockResolvedValueOnce(mockAdmin as any);

        const result = await repository.findById(mockAdmin.id_administrator);

        expect(result).toEqual(mockAdmin);
        expect(repository.findById).toHaveBeenCalledWith(mockAdmin.id_administrator);
        expect(repository.findById).toHaveBeenCalledTimes(1);
      });
    });

    describe('findByEmail method tests', () => {
      it('should not find an administrator given an invalid email', async () => {
        const invalidEmail = 'invalid-email';

        jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(null);

        const result = await repository.findByEmail(invalidEmail);

        expect(result).toBeNull();
        expect(repository.findByEmail).toHaveBeenCalledWith(invalidEmail);
        expect(repository.findByEmail).toHaveBeenCalledTimes(1);
      });

      it('should find an administrator by email', async () => {
        jest.spyOn(repository, 'findByEmail').mockResolvedValueOnce(mockAdmin as any);

        const result = await repository.findByEmail(mockAdmin.email);

        expect(result).toEqual(mockAdmin);
        expect(repository.findByEmail).toHaveBeenCalledWith(mockAdmin.email);
        expect(repository.findByEmail).toHaveBeenCalledTimes(1);
      });
    });

    describe('comparePassword method tests', () => {
      it('should return null if administrator not found', async () => {
        const invalidId = 'invalid-id';
        const givenPassword = 'password';

        jest.spyOn(repository, 'comparePassword').mockResolvedValueOnce(null);

        const result = await repository.comparePassword(invalidId, givenPassword);

        expect(result).toBeNull();
        expect(repository.comparePassword).toHaveBeenCalledWith(invalidId, givenPassword);
        expect(repository.comparePassword).toHaveBeenCalledTimes(1);
      });

      it('should return false for a valid administrator and incorrect password', async () => {
        const validId = 'valid-id';
        const givenPassword = 'wrong-password';

        jest.spyOn(repository, 'comparePassword').mockResolvedValueOnce(false);

        const result = await repository.comparePassword(validId, givenPassword);

        expect(result).toBe(false);
        expect(repository.comparePassword).toHaveBeenCalledWith(validId, givenPassword);
        expect(repository.comparePassword).toHaveBeenCalledTimes(1);
      });

      it('should return true for a valid administrator and correct password', async () => {
        const validId = 'valid-id';
        const givenPassword = 'password';

        jest.spyOn(repository, 'comparePassword').mockResolvedValueOnce(true);

        const result = await repository.comparePassword(validId, givenPassword);

        expect(result).toBe(true);
        expect(repository.comparePassword).toHaveBeenCalledWith(validId, givenPassword);
        expect(repository.comparePassword).toHaveBeenCalledTimes(1);
      });
    });
});
