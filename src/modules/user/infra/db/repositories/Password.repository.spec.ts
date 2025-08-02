import { PasswordHistory } from '@prisma/client';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { PasswordRepository } from './Password.repository';

describe('Password History Repository Test Suites', () => {
  let repository: PasswordRepository;

    beforeEach(() => {
      jest.useFakeTimers({ doNotFake: ['nextTick'] });
    });
  
    beforeEach(() => {
      repository = new PasswordRepository(
        new EncrypterProvider()
      );
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    afterAll(() => {
      jest.useRealTimers();
    });

    const mockPasswordHistory: PasswordHistory = {
      id: 'valid-id',
      user_id: 'valid-user-id',
      password: 'valid-password',
      created_at: new Date(),
    };

    describe('create method tests', () => {
      it('should not create a password history entry with an invalid user ID', async () => {
        const invalidUserId = 'invalid-user-id';

        jest.spyOn(repository, 'create').mockResolvedValueOnce(null);

        const result = await repository.create({
          user_id: invalidUserId,
          password: 'valid-password',
        });

        expect(result).toBeNull();
        expect(repository.create).toHaveBeenCalledWith({
          user_id: invalidUserId,
          password: 'valid-password',
        });
      });

      it('should create a new password history entry', async () => {
        jest.spyOn(repository, 'create').mockResolvedValueOnce(mockPasswordHistory);

        const result = await repository.create(mockPasswordHistory);

        expect(result).toEqual(mockPasswordHistory);
        expect(repository.create).toHaveBeenCalledWith(mockPasswordHistory);
        expect(repository.create).toHaveBeenCalledTimes(1);
      });
    });

    describe('getByUserId method tests', () => {
      it('should return an empty array if no password history is found for the user', async () => {
        const userId = 'non-existent-user-id';

        jest.spyOn(repository, 'getByUserId').mockResolvedValueOnce([]);

        const result = await repository.getByUserId({ user_id: userId, count: 1 });

        expect(result).toEqual([]);
        expect(repository.getByUserId).toHaveBeenCalledWith({ user_id: userId, count: 1 });
        expect(repository.getByUserId).toHaveBeenCalledTimes(1);
      });

      it('should return password history entries for a valid user ID', async () => {
        const userId = 'valid-user-id';
        const mockHistory = [mockPasswordHistory];

        jest.spyOn(repository, 'getByUserId').mockResolvedValueOnce(mockHistory);

        const result = await repository.getByUserId({ user_id: userId, count: 1 });


        expect(result).toEqual(mockHistory);
        expect(repository.getByUserId).toHaveBeenCalledWith({ user_id: userId, count: 1 });
        expect(repository.getByUserId).toHaveBeenCalledTimes(1);
      });
    });
});
