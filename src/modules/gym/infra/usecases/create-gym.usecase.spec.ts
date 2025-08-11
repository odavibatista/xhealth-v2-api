import { UnauthorizedException } from '@nestjs/common';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';
import { AddressRepository } from '../../../address/infra/db/repositories/address.repository';
import { AdminPermissionRepository } from '../../../admin-permission/infra/db/repositories/admin-permission.repository';
import { AccountNotFoundException } from '../../../administrator/domain/dtos/errors/AccountNotFound.exception';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { HashProvider } from '../../../user/infra/providers/hash.provider';
import { GymRepository } from '../db/repositories/gym.repository';
import { CreateGymUsecase } from './create-gym.usecase';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../../user/domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { CreateGymResponseDTO } from '../../domain/dtos/requests/CreateGym.request.dto';

describe('Create Gym Usecase Test Suites', () => {
  let useCase: CreateGymUsecase;
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
        hashProvider
      );
      mockadminPermissionsRepository = new AdminPermissionRepository();
      mockAddressRepository = new AddressRepository(encrypterProvider);
      useCase = new CreateGymUsecase(
        mockGymRepository,
        mockadministratorRepository,
        mockadminPermissionsRepository,
        mockAddressRepository,
      );
      jest.clearAllMocks();
    });
  
    afterAll(() => {
      jest.useRealTimers();
    });

    it('should not create a gym if the administrator does not exist', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'non-existent-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce(null);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        AccountNotFoundException,
      );
    });

    it('should not create a gym if the administrator does not have permission', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(false);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should not create a gym if the phone number is invalid', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: 'invalid-phone',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        UnprocessableDataException
      );
    });

    it('should not create a gym if the phone number is already registered', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);
      jest.spyOn(mockGymRepository, 'findByPhoneNumber').mockResolvedValueOnce(data as any);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        PhoneNumberAlreadyRegisteredException
      );
    });

    it('should not create a gym if the cep is invalid', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: 'invalid-cep',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        UnprocessableDataException
      );
    });

    it('should not create a gym if the street is invalid', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: '',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        UnprocessableDataException
      );
    });

    it('should not create a gym if the number is invalid', async () => {
      const data = {
        name: 'Gym Test',
        address: {
          cep: '12345678',
          street: 'Test Street',
          number: '',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);

      await expect(useCase.execute(data, administrator_id)).rejects.toThrow(
        UnprocessableDataException
      );
    });

    it('should create a gym successfully', async () => {
      const data = {
        id_gym: 'gym-id',
        name: 'Gym Test',
        address: {
          id_address: 'address-id',
          cep: '12345678',
          street: 'Test Street',
          number: '123',
          city: 'Test City',
          uf_id: '1',
          complement: 'Test Complement',
        },
        phone_number: '1234567890',
        imageUrl: 'http://example.com/image.jpg',
        created_by: 'admin-id',
        created_at: '2023-10-01T00:00:00Z',
        updated_at: '2023-10-01T00:00:00Z',
      };
      const administrator_id = 'admin-id';

      jest.spyOn(mockadministratorRepository, 'findById').mockResolvedValueOnce({ id_administrator: administrator_id });
      jest.spyOn(mockadminPermissionsRepository, 'hasPermission').mockResolvedValueOnce(true);
      jest.spyOn(mockGymRepository, 'findByPhoneNumber').mockResolvedValueOnce(null);
      jest.spyOn(mockGymRepository, 'create').mockResolvedValue(data as any);
      jest.spyOn(mockAddressRepository, 'findById').mockResolvedValue({
        id_address: data.address.id_address,
        cep: data.address.cep,
        street: data.address.street,
        number: data.address.number,
        city: data.address.city,
        uf_id: data.address.uf_id,
        complement: data.address.complement,
      });

      const result = await useCase.execute(data, administrator_id);

      expect(result).toEqual(data);
    });
  });
