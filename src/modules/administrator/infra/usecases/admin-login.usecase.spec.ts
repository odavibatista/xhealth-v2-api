import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { InvalidCredentialsException } from '../../../user/domain/dtos/errors/InvalidCredentials.exception';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { JWTProvider } from '../../../user/infra/providers/jwt.provider';
import { AdministratorRepository } from '../db/repositories/administrator.repository';
import { AdminLoginUsecase } from './admin-login.usecase';
import { faker } from '@faker-js/faker';

describe('Admin Login Usecase Test Suites', () => {
  let usecase: AdminLoginUsecase;
  let mockRepository: AdministratorRepository;
  let encrypterProvider: EncrypterProvider;
  let hashProvider: HashProvider;
  let jwtProvider: JWTProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    hashProvider = new HashProvider();
    mockRepository = new AdministratorRepository(
      encrypterProvider,
      hashProvider,
    );
    jwtProvider = new JWTProvider();
    usecase = new AdminLoginUsecase(mockRepository, jwtProvider);
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const mockAdmin = {
    id_administrator: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: 'admin',
    created_at: new Date(),
  };

  it('should throw InvalidCredentialsException if admin not found', async () => {
    const data = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    jest.spyOn(mockRepository, 'findByEmail').mockResolvedValueOnce(null);

    await expect(usecase.execute(data)).rejects.toThrow(
      InvalidCredentialsException,
    );
  });

  it('should throw InvalidCredentialsException if the e-mail is valid, but the password is invalid', async () => {
    const data = {
      email: mockAdmin.email,
      password: faker.internet.password(),
    };

    jest
      .spyOn(mockRepository, 'findByEmail')
      .mockResolvedValueOnce(mockAdmin as any);
    jest.spyOn(mockRepository, 'comparePassword').mockResolvedValueOnce(false);

    await expect(usecase.execute(data)).rejects.toThrow(
      InvalidCredentialsException,
    );
  });

  it('should return a valid token and admin data on successful login', async () => {
    const data = {
      email: mockAdmin.email,
      password: faker.internet.password(),
    };

    jest
      .spyOn(mockRepository, 'findByEmail')
      .mockResolvedValueOnce(mockAdmin as any);
    jest.spyOn(mockRepository, 'comparePassword').mockResolvedValueOnce(true);
    jest.spyOn(jwtProvider, 'generate').mockReturnValue('valid-token');

    const result = await usecase.execute(data);

    expect(result).toEqual({
      token: 'valid-token',
      admin: {
        id_admin: mockAdmin.id_administrator,
        name: mockAdmin.name,
      },
    });
  });
});
