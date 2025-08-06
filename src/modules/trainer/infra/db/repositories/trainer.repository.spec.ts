import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { TrainerRepository } from './trainer.repository';
import { faker } from '@faker-js/faker';

describe('TrainerRepository', () => {
  let repository: TrainerRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new TrainerRepository(new EncrypterProvider());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockTrainer = {
    id_trainer: 'valid-id',
    name: faker.person.fullName(),
    instagram: faker.internet.url(),
    twitter: faker.internet.url(),
    youtube: faker.internet.url(),
    imageUrl: faker.image.url(),
    createdAt: faker.date.past(),
  };

  describe('findAll method test suites', () => {
    it('should return an array of trainers', async () => {
      jest
        .spyOn(repository, 'findAll')
        .mockResolvedValueOnce([mockTrainer] as any);

      const result = await repository.findAll();

      expect(result).toEqual([mockTrainer]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array when no trainers are found', async () => {
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce([]);

      const result = await repository.findAll();

      expect(result).toEqual([]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('findById method test suites', () => {
    it('should return a trainer by ID', async () => {
      const validId = 'valid-id';

      jest
        .spyOn(repository, 'findById')
        .mockResolvedValueOnce(mockTrainer as any);

      const result = await repository.findById(validId);

      expect(result).toEqual(mockTrainer);
      expect(repository.findById).toHaveBeenCalledTimes(1);
      expect(repository.findById).toHaveBeenCalledWith(validId);
    });
  });

  it('should return null when no trainer is found by ID', async () => {
    const invalidId = 'invalid-id';

    jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

    const result = await repository.findById(invalidId);

    expect(result).toBeNull();
    expect(repository.findById).toHaveBeenCalledWith(invalidId);
    expect(repository.findById).toHaveBeenCalledTimes(1);
  });

  describe('findByName method test suites', () => {
    it('should return trainers matching the name', async () => {
      const nameQuery = 'John';

      jest
        .spyOn(repository, 'findByName')
        .mockResolvedValueOnce([mockTrainer] as any);

      const result = await repository.findByName(nameQuery);

      expect(result).toEqual([mockTrainer]);
      expect(repository.findByName).toHaveBeenCalledWith(nameQuery);
      expect(repository.findByName).toHaveBeenCalledTimes(1);
    });

    it('should return an empty array when no trainers match the name', async () => {
      const nameQuery = 'NonExistent';

      jest.spyOn(repository, 'findByName').mockResolvedValueOnce([]);

      const result = await repository.findByName(nameQuery);

      expect(result).toEqual([]);
      expect(repository.findByName).toHaveBeenCalledWith(nameQuery);
      expect(repository.findByName).toHaveBeenCalledTimes(1);
    });
  });
});
