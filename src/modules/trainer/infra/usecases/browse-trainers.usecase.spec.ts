import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { TrainerRepository } from '../db/repositories/trainer.repository';
import { BrowseTrainersUsecase } from './browse-trainers.usecase';
import { faker } from '@faker-js/faker';

describe('Browse Trainers Use Case Test Suites', () => {
  let usecase: BrowseTrainersUsecase;
  let mockRepository: TrainerRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new TrainerRepository(encrypterProvider);
    usecase = new BrowseTrainersUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return an empty array when no trainers are found', async () => {
    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual([]);
  });

  it('should return a list of trainers', async () => {
    const mockTrainers = [
      {
        id_trainer: faker.string.uuid(),
        name: faker.person.fullName(),
        instagramUrl: faker.internet.url(),
        twitterUrl: faker.internet.url(),
        youtubeUrl: faker.internet.url(),
        imageUrl: faker.image.url(),
      },
    ];
    jest
      .spyOn(mockRepository, 'findAll')
      .mockResolvedValueOnce(mockTrainers as any);

    const result = await usecase.execute();

    expect(result).toEqual(mockTrainers);
  });
});
