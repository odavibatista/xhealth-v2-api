import { UnauthorizedException } from '@nestjs/common';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { UserRepository } from '../../../user/infra/db/repositories/user.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { EditGymBodyDTO } from '../../domain/dtos/requests/EditGym.request.dto';
import { GymRepository } from '../db/repositories/gym.repository';
import { EditGymUsecase } from './edit-gym.usecase';
import { faker } from '@faker-js/faker';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../../user/domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { GymNameInUseException } from '../../domain/dtos/errors/GymNameInUseException.exception';
import { an } from '@faker-js/faker/dist/airline-CLphikKp';

describe('Edit Gym Use Case Test Suites', () => {
  let useCase: EditGymUsecase;
  let encrypterProvider: EncrypterProvider;
  let mockGymRepository: GymRepository;
  let mockadministratorRepository: AdministratorRepository;
  let mockadminPermissionsRepository: AdminPermissionRepository;
  let mockAddressRepository: AddressRepository;
  let mockUFRepository: UfRepository;
  let mockUserRepository: UserRepository;
  let hashProvider: HashProvider;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(async () => {
    encrypterProvider = new EncrypterProvider();
    hashProvider = new HashProvider();
    mockGymRepository = new GymRepository(encrypterProvider);
    mockadministratorRepository = new AdministratorRepository(
      encrypterProvider,
      hashProvider,
    );
    mockadminPermissionsRepository = new AdminPermissionRepository();
    mockAddressRepository = new AddressRepository(encrypterProvider);
    mockUFRepository = new UfRepository();
    mockUserRepository = new UserRepository(
      hashProvider,
      encrypterProvider,
      mockAddressRepository,
    );
    mockUFRepository = new UfRepository();
    useCase = new EditGymUsecase(
      mockGymRepository,
      mockadministratorRepository,
      mockadminPermissionsRepository,
      mockAddressRepository,
      mockUserRepository,
      mockUFRepository,
    );
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should not edit a gym with invalid address data', async () => {
    const invalidData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: 'invalid-cep',
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: faker.location.city(),
        uf_id: 'invalid-uf',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: faker.phone.number(),
    };

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', invalidData),
    ).rejects.toThrow(UnprocessableDataException);
  });

  it('should not edit a gym with an invalid phone number', async () => {
    const invalidData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode(),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: faker.location.city(),
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: 'invalid-phone',
    };

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', invalidData),
    ).rejects.toThrow(UnprocessableDataException);
  });

  it('should not edit a gym with an invalid UF ID', async () => {
    const invalidData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'invalid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockUFRepository, 'findById').mockResolvedValue(null);

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', invalidData),
    ).rejects.toThrow(UFNotFoundException);
  });

  it('should not edit a gym if the admin does not exist', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValue(null);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });

    await expect(
      useCase.execute('valid-gym-id', 'invalid-admin-id', validData),
    ).rejects.toThrow(AccountNotFoundException);
  });

  it('should not edit a gym if the admin does not have permission', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(false);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', validData),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should not edit a gym if the gym does not exist', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValue(null);
    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(true);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });

    await expect(
      useCase.execute('invalid-gym-id', 'valid-admin-id', validData),
    ).rejects.toThrow(GymNotFoundException);
  });

  it('should not edit a gym if the phone number is already in use by another gym', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValue({
      id_gym: 'valid-gym-id',
      phone_number: '11999999998',
    } as any);
    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(true);
    jest
      .spyOn(mockGymRepository, 'findByPhoneNumber')
      .mockResolvedValue({ id_gym: 'another-gym-id' } as any);
    jest.spyOn(mockUserRepository, 'findByPhoneNumber').mockResolvedValue(null);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', validData),
    ).rejects.toThrow(PhoneNumberAlreadyRegisteredException);
  });

  it('should not edit a gym if the phone number is already in use by an user', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValue({
      id_gym: 'valid-gym-id',
      phone_number: '11999999998',
    } as any);
    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(true);
    jest.spyOn(mockGymRepository, 'findByPhoneNumber').mockResolvedValue(null);
    jest
      .spyOn(mockUserRepository, 'findByPhoneNumber')
      .mockResolvedValue({ id_user: 'user-id' } as any);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });
    jest.spyOn(mockGymRepository, 'findByPhoneNumber').mockResolvedValue(null);

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', validData),
    ).rejects.toThrow(PhoneNumberAlreadyRegisteredException);
  });

  it('should not edit a gym if the name is already in use by another gym', async () => {
    const validData: EditGymBodyDTO = {
      name: 'Gym Name',
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValue({
      id_gym: 'valid-gym-id',
      name: 'Old Gym Name',
    } as any);
    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(true);
    jest
      .spyOn(mockGymRepository, 'findByName')
      .mockResolvedValue({ id_gym: 'another-gym-id' } as any);
    jest
      .spyOn(mockUFRepository, 'findById')
      .mockResolvedValue({ id_uf: 'valid-uf-id', name: 'São Paulo' });
    jest
      .spyOn(mockGymRepository, 'findByPhoneNumber')
      .mockResolvedValueOnce(null);
    jest
      .spyOn(mockUserRepository, 'findByPhoneNumber')
      .mockResolvedValueOnce(null);

    await expect(
      useCase.execute('valid-gym-id', 'valid-admin-id', validData),
    ).rejects.toThrow(GymNameInUseException);
  });

  it('should edit a gym successfully', async () => {
    const validData: EditGymBodyDTO = {
      name: faker.company.name(),
      imageUrl: faker.image.url(),
      address: {
        cep: faker.location.zipCode({ format: '########' }),
        street: faker.location.street(),
        number: faker.string.numeric(),
        city: 'São Paulo',
        uf_id: 'valid-uf-id',
        complement: faker.location.secondaryAddress(),
      },
      phone_number: '11999999999',
    };

    const mockGym = {
      id_gym: 'valid-gym-id',
      name: 'Old Gym Name',
      phone_number: '11999999998',
      imageUrl: faker.image.url(),
      address: {
        id_address: 'valid-address-id',
        cep: validData.address.cep,
        street: validData.address.street,
        number: validData.address.number,
        complement: validData.address.complement,
        uf_id: validData.address.uf_id,
        city: validData.address.city,
      },
    };

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValue(mockGym as any);
    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValue({ id_admin: 'valid-admin-id' } as any);
    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValue(true);
    jest.spyOn(mockGymRepository, 'findByPhoneNumber').mockResolvedValue(null);
    jest.spyOn(mockUserRepository, 'findByPhoneNumber').mockResolvedValue(null);
    jest.spyOn(mockGymRepository, 'findByName').mockResolvedValue(null);
    jest.spyOn(mockAddressRepository, 'edit').mockResolvedValue({
      id_address: mockGym.address.id_address,
      ...validData.address,
    });
    jest.spyOn(mockGymRepository, 'edit').mockResolvedValue({
      ...mockGym,
      ...validData,
    });
    jest.spyOn(mockUFRepository, 'findById').mockResolvedValue({
      id_uf: validData.address.uf_id,
      name: validData.address.city,
    });

    const result = await useCase.execute(
      'valid-gym-id',
      'valid-admin-id',
      validData,
    );

    expect(result).toEqual({
      id_gym: mockGym.id_gym,
      name: validData.name,
      phone_number: validData.phone_number,
      imageUrl: validData.imageUrl,
      address: {
        id_address: mockGym.address.id_address,
        cep: validData.address.cep,
        street: validData.address.street,
        number: validData.address.number,
        complement: validData.address.complement,
        uf_id: validData.address.uf_id,
        city: validData.address.city,
      },
      created_by: 'valid-admin-id',
      created_at: expect.any(String),
      updated_at: expect.any(String),
    });
  });
});
