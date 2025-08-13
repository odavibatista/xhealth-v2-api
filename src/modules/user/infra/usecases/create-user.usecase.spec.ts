import { UnprocessableEntityException } from '@nestjs/common';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { GymPlanNotFoundException } from '../../../gym-plan/domain/dtos/errors/GymPlanNotFound.exception';
import { GymPlanRepository } from '../../../gym-plan/infra/db/repositories/gym-plan.repository';
import { GymRepository } from '../../../gym/infra/db/repositories/gym.repository';
import { EmailAlreadyRegisteredException } from '../../domain/dtos/errors/EmailAlreadyRegistered.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { CreateUserBodyDTO } from '../../domain/dtos/requests/CreateUser.request.dto';
import { UserRepository } from '../db/repositories/user.repository';
import { HashProvider } from '../providers/hash.provider';
import { JWTProvider } from '../providers/jwt.provider';
import { CreateUserUseCase } from './create-user.usecase';
import { faker } from '@faker-js/faker';

describe('User Register Use Case Test Suites', () => {
  let useCase: CreateUserUseCase;
  let hashProvider: HashProvider;
  let encrypterProvider: EncrypterProvider;
  let jwtProvider: JWTProvider;
  let mockUserRepository: UserRepository;
  let mockUfRepository: UfRepository;
  let mockGymRepository: GymRepository;
  let mockAdminRepository: AdministratorRepository;
  let mockGymPlanRepository: GymPlanRepository;
  let mockAddressRepository: AddressRepository;
  let data: CreateUserBodyDTO;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    hashProvider = new HashProvider();
    jwtProvider = new JWTProvider();
    mockGymRepository = new GymRepository(encrypterProvider);
    mockAddressRepository = new AddressRepository(encrypterProvider);
    mockAdminRepository = new AdministratorRepository(
      encrypterProvider,
      hashProvider,
    );
    mockUfRepository = new UfRepository();
    mockUserRepository = new UserRepository(
      hashProvider,
      encrypterProvider,
      mockAddressRepository,
    );
    mockUfRepository = new UfRepository();
    mockGymPlanRepository = new GymPlanRepository(encrypterProvider);
    useCase = new CreateUserUseCase(
      hashProvider,
      jwtProvider,
      mockUserRepository,
      mockUfRepository,
      mockGymRepository,
      mockAdminRepository,
      mockGymPlanRepository,
    );

    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  const password = 'SenhaValida@1234$';

  let mockdata = {
    id_user: faker.string.uuid(),
    name: 'Fulano de Tal',
    email: faker.internet.email(),
    password: password,
    phone_number: '11999999999',
    birth_date: '2000-01-01',
    check_privacy: true,
    password_confirmation: password,
    address: {
      cep: '12345678',
      street: 'Valid Street',
      number: '123',
      complement: 'Apt 1',
      city: 'Valid City',
      uf_id: faker.string.uuid(),
    },
    gym_plan_id: 'valid-gym-plan-id',
  };

  data = mockdata;

  describe('unsuccessful cases', () => {
    it('should not create an user if the UF does not exist', async () => {
      data.address.uf_id = '1';

      jest.spyOn(mockUfRepository, 'findById').mockResolvedValueOnce(null);

      await expect(useCase.execute(data)).rejects.toThrow(UFNotFoundException);
    });

    it('should not create an user if the email is already in use', async () => {
      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockUserRepository, 'findByEmail')
        .mockResolvedValueOnce(data as any);

      await expect(useCase.execute(data)).rejects.toThrow(
        EmailAlreadyRegisteredException,
      );
    });

    it('should not create an user if the gym plan does not exist', async () => {
      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest.spyOn(mockGymPlanRepository, 'findById').mockResolvedValueOnce(null);

      await expect(useCase.execute(data)).rejects.toThrow(
        GymPlanNotFoundException,
      );
    });

    it('should not create an user if the e-mail is in use by an admin', async () => {
      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymPlanRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockAdminRepository, 'findByEmail')
        .mockResolvedValueOnce(data as any);

      await expect(useCase.execute(data)).rejects.toThrow(
        EmailAlreadyRegisteredException,
      );
    });

    it('should not create an user if the phone number is already in use by another user', async () => {
      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymPlanRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockAdminRepository, 'findByEmail')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockUserRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(data as any);

      await expect(useCase.execute(data)).rejects.toThrow(
        PhoneNumberAlreadyRegisteredException,
      );
    });

    it('should not create an user if the phone number is already in use by a gym', async () => {
      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymPlanRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockAdminRepository, 'findByEmail')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockUserRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(data as any);

      await expect(useCase.execute(data)).rejects.toThrow(
        PhoneNumberAlreadyRegisteredException,
      );
    });

    it('should not create an user if the passwords do not match', async () => {
      data.password_confirmation = '';

      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymPlanRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockAdminRepository, 'findByEmail')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockUserRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(null);

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableEntityException,
      );
    });

    it('should not create an user if the cep is invalid', async () => {
      data.address.cep = '1';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the address number is invalid', async () => {
      data.address.number = '';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the city is invalid', async () => {
      data.address.city = '';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the complement is misformatted', async () => {
      data.address.complement = '%$@()*!$)(@$!';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the name is not validly formatted', async () => {
      data.name = faker.person.firstName();

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );

      data = mockdata;
    });

    it('should not create an user if the email is invalid', async () => {
      data.email = '';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the phone number is invalid', async () => {
      data.phone_number = '';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the age is below 18', async () => {
      data.birth_date = '01/01/2025';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );
      data = mockdata;
    });

    it('should not create an user if the password is misformatted', async () => {
      data.password = '';

      await expect(useCase.execute(data)).rejects.toThrow(
        UnprocessableDataException,
      );

      data = mockdata;
    });
  });

  describe('successful cases', () => {
    it('should create an user given valid data', async () => {
      data = {
        name: 'Fulano de Tal',
        email: faker.internet.email(),
        password: password,
        phone_number: '11999999999',
        birth_date: '2000-01-01',
        check_privacy: true,
        password_confirmation: password,
        address: {
          cep: '12345678',
          street: 'Valid Street',
          number: '123',
          complement: 'Apt 1',
          city: 'Valid City',
          uf_id: faker.string.uuid(),
        },
        gym_plan_id: 'valid-gym-plan-id',
      };

      jest
        .spyOn(mockUfRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest.spyOn(mockUserRepository, 'findByEmail').mockResolvedValueOnce(null);

      jest
        .spyOn(mockGymPlanRepository, 'findById')
        .mockResolvedValueOnce(data as any);

      jest
        .spyOn(mockAdminRepository, 'findByEmail')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockUserRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(null);

      jest.spyOn(hashProvider, 'hash').mockResolvedValue(data.password as any);

      jest
        .spyOn(mockGymRepository, 'findByPhoneNumber')
        .mockResolvedValueOnce(null);

      jest
        .spyOn(mockUserRepository, 'create')
        .mockResolvedValue(mockdata as any);

      jest.spyOn(jwtProvider, 'generate').mockReturnValue('valid-token');

      const result = await useCase.execute(data);

      expect(result).toEqual({
        token: 'valid-token',
        id: mockdata.id_user,
      });
    });
  });
});
