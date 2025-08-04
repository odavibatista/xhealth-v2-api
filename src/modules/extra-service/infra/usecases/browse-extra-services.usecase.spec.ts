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
});
