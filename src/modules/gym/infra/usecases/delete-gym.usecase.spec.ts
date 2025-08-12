import { UnauthorizedException } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { GymRepository } from '../db/repositories/gym.repository';
import { DeleteGymUsecase } from './delete-gym.usecase';
import { fa, faker } from '@faker-js/faker';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';

describe('Delete Gym Usecase Test Suites', () => {
  let useCase: DeleteGymUsecase;
  let encrypterProvider: EncrypterProvider;
  let mockGymRepository: GymRepository;
  let mockadministratorRepository: AdministratorRepository;
  let mockadminPermissionsRepository: AdminPermissionRepository;
  let mockAddressRepository: AddressRepository;
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
    useCase = new DeleteGymUsecase(
      mockGymRepository,
      mockAddressRepository,
      mockadministratorRepository,
      mockadminPermissionsRepository,
    );
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

    const mockGym = {
      id_gym: faker.string.uuid(),
      name: faker.company.name(),
      address: {
        id_address: faker.string.uuid(),
        cep: faker.location.zipCode(),
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        city: faker.location.city(),
        uf_id: faker.string.uuid(),
        complement: faker.location.secondaryAddress(),
      },
      phone_number: faker.phone.number(),
      imageUrl: faker.image.url(),
    };

  it('should not create a gym if the administrator does not exist', async () => {
    const administrator_id = 'non-existent-id';

    jest
      .spyOn(mockadministratorRepository, 'findById')
      .mockResolvedValueOnce(null);

    await expect(useCase.execute(mockGym.id_gym, administrator_id)).rejects.toThrow(
      AccountNotFoundException,
    );
  });

  it('should not delete a gym if the administrator does not have permission', async () => {
    const administrator_id = faker.string.uuid();

    jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({
      id_administrator: administrator_id,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValueOnce(false);

    await expect(useCase.execute(mockGym.id_gym, administrator_id)).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('should not delete a gym if it does not exist', async () => {
    const administrator_id = faker.string.uuid();

    jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({
      id_administrator: administrator_id,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValueOnce(true);

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValueOnce(null);

    await expect(useCase.execute(mockGym.id_gym, administrator_id)).rejects.toThrow(
      GymNotFoundException,
    );
  });

  it('should return true when a gym is successfully deleted', async () => {
    const administrator_id = faker.string.uuid();

    jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({
      id_administrator: administrator_id,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    jest
      .spyOn(mockadminPermissionsRepository, 'hasPermission')
      .mockResolvedValueOnce(true);

    jest.spyOn(mockGymRepository, 'findById').mockResolvedValueOnce(mockGym as any);

    jest.spyOn(mockAddressRepository, 'delete').mockResolvedValueOnce(true);
    jest.spyOn(mockGymRepository, 'delete').mockResolvedValueOnce(true);

    const result = await useCase.execute(mockGym.id_gym, administrator_id);

    expect(result).toBe(true);
    expect(mockAddressRepository.delete).toHaveBeenCalledWith(mockGym.address.id_address);
    expect(mockGymRepository.delete).toHaveBeenCalledWith(mockGym.id_gym);
  })
});
