import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { TrainerNotFoundException } from '../../domain/dtos/errors/TrainerNotFound.exception';
import { TrainerRepository } from '../db/repositories/trainer.repository';
import { FindTrainerByIdUsecase } from './find-trainer-by-id.usecase';
import { faker } from '@faker-js/faker';

describe('Find Trainer By ID Use Case', () => {
  let usecase: FindTrainerByIdUsecase;
  let mockRepository: TrainerRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new TrainerRepository(encrypterProvider);
    usecase = new FindTrainerByIdUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockTrainer = {
    id_trainer: 'valid-id',
    name: faker.person.fullName(),
    instagramUrl: faker.internet.url(),
    twitterUrl: faker.internet.url(),
    youtubeUrl: faker.internet.url(),
    imageUrl: faker.image.url(),
  };

  it('should return null when no trainer is found for the given ID', async () => {
    const invalidId = 'invalid-id';

    jest.spyOn(mockRepository, 'findById').mockResolvedValueOnce(null);

    expect(async () => {
      await usecase.execute(invalidId);
    }).rejects.toThrow(TrainerNotFoundException);
  });

  it('should return the trainer when found by ID', async () => {
    const validId = 'valid-id';

    jest
      .spyOn(mockRepository, 'findById')
      .mockResolvedValueOnce(mockTrainer as any);

    const result = await usecase.execute(validId);

    expect(result).toEqual(mockTrainer);
    expect(mockRepository.findById).toHaveBeenCalledWith(validId);
    expect(mockRepository.findById).toHaveBeenCalledTimes(1);
  });
});
