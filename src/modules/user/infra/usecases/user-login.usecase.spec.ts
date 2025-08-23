import { DateProvider } from '../../../../shared/infra/providers/Date.provider';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { InvalidCredentialsException } from '../../domain/dtos/errors/InvalidCredentials.exception';
import { UserLoginLogRepositoryInterface } from '../../domain/dtos/repositories/UserLoginLog.repository';
import { UserRepository } from '../db/repositories/user.repository';
import { UserLoginLogsRepository } from '../db/repositories/UserLoginLog.repository';
import { HashProvider } from '../providers/hash.provider';
import { JWTProvider } from '../providers/jwt.provider';
import { UserLoginUsecase } from './user-login.usecase';
import { faker } from '@faker-js/faker';

describe('User Login Usecase Test Suites', () => {
  let usecase: UserLoginUsecase;
  let mockRepository: UserRepository;
  let mockUserLoginLogRepository: UserLoginLogRepositoryInterface;
  let addressRepository: AddressRepository;
  let encrypterProvider: EncrypterProvider;
  let hashProvider: HashProvider;
  let jwtProvider: JWTProvider;
  let dateProvider: DateProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    hashProvider = new HashProvider();
    dateProvider = new DateProvider();
    addressRepository = new AddressRepository(encrypterProvider);
    mockUserLoginLogRepository = new UserLoginLogsRepository();
    mockRepository = new UserRepository(
      hashProvider,
      encrypterProvider,
      addressRepository,
    );
    jwtProvider = new JWTProvider();
    usecase = new UserLoginUsecase(
      mockRepository,
      mockUserLoginLogRepository,
      jwtProvider,
      dateProvider,
    );
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const ip = faker.internet.ip();

  it('should throw InvalidCredentialsException if user not found', async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    jest.spyOn(mockRepository, 'findByEmail').mockResolvedValueOnce(null);

    await expect(usecase.execute(data, ip)).rejects.toThrow(
      InvalidCredentialsException,
    );
  });

  it('should return a valid token and user data on successful login', async () => {
    const mockUser = {
      id_user: faker.string.uuid(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      created_at: new Date(),
    };

    const data = {
      email: mockUser.email,
      password: faker.internet.password(),
    };

    jest
      .spyOn(mockRepository, 'findByEmail')
      .mockResolvedValueOnce(mockUser as any);
    jest.spyOn(mockRepository, 'comparePassword').mockResolvedValueOnce(true);
    jest.spyOn(mockUserLoginLogRepository, 'create').mockResolvedValueOnce();
    jest.spyOn(jwtProvider, 'generate').mockReturnValue('valid-token');

    const result = await usecase.execute(data, ip);

    expect(result).toEqual({
      token: 'valid-token',
      user: {
        id_user: mockUser.id_user,
        name: mockUser.name,
      },
    });
  });
});
