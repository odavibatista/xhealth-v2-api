import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';
import { GymRepository } from '../db/repositories/gym.repository';
import { FindGymByIdUsecase } from './find-gym-by-id.usecase';
import { faker } from '@faker-js/faker';

describe('Find Gym By Id Use Case', () => {
  let usecase: FindGymByIdUsecase;
  let mockRepository: GymRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new GymRepository(encrypterProvider);
    usecase = new FindGymByIdUsecase(encrypterProvider,mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should throw an exception when given an invalid gym id', async () => {
    const invalidId = 'invalid-id';
    jest.spyOn(mockRepository, 'findById').mockResolvedValueOnce(null);

    await expect(usecase.execute(invalidId)).rejects.toThrow(
      GymNotFoundException,
    );
  });

  it('should return a gym when a valid id is provided', async () => {
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

    jest.spyOn(mockRepository, 'findById').mockResolvedValueOnce(mockGym);
    jest.spyOn(encrypterProvider, 'decrypt').mockReturnValueOnce(mockGym.address.city);
    jest.spyOn(encrypterProvider, 'decrypt').mockReturnValueOnce(mockGym.address.cep);
    jest.spyOn(encrypterProvider, 'decrypt').mockReturnValueOnce(mockGym.address.street);
    jest.spyOn(encrypterProvider, 'decrypt').mockReturnValueOnce(mockGym.address.complement);

    const result = await usecase.execute(mockGym.id_gym);

    expect(result).toEqual(mockGym);
  });
});
