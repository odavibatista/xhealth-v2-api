import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';
import { BrowseExtraServicesUsecase } from './browse-extra-services.usecase';

describe('Browse Extra Services Use Case', () => {
  let usecase: BrowseExtraServicesUsecase;
  let mockRepository: ExtraServiceRepository;
  let encrypterProvider: EncrypterProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    mockRepository = new ExtraServiceRepository(encrypterProvider);
    usecase = new BrowseExtraServicesUsecase(mockRepository);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return an empty array when no extra services are found', async () => {
    jest.spyOn(mockRepository, 'findAll').mockResolvedValueOnce([]);

    const result = await usecase.execute();

    expect(result).toEqual([]);
  });

  it('should return a list of extra services', async () => {
    const mockServices = [
      {
        id_extra_service: '1',
        name: 'Service One',
        description: 'Description One',
        price: '10.00',
        imageUrl: 'http://example.com/image1.jpg',
      },
      {
        id_extra_service: '2',
        name: 'Service Two',
        description: 'Description Two',
        price: '20.00',
        imageUrl: 'http://example.com/image2.jpg',
      },
    ];

    jest
      .spyOn(mockRepository, 'findAll')
      .mockResolvedValueOnce(mockServices as any);

    const result = await usecase.execute();

    expect(result).toEqual([
      {
        id_extra_service: '1',
        name: 'Service One',
        description: 'Description One',
        price: '10.00',
        imageUrl: 'http://example.com/image1.jpg',
      },
      {
        id_extra_service: '2',
        name: 'Service Two',
        description: 'Description Two',
        price: '20.00',
        imageUrl: 'http://example.com/image2.jpg',
      },
    ]);
  });
});
