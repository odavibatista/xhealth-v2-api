import { Gym } from '@prisma/client';
import { GymRepositoryInterface } from '../../../domain/dtos/repositories/gym.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { FindGymByIDDto } from '../../../domain/dtos/requests/FindGymByID.request.dto';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import { CreateGymBodyDTO } from '../../../domain/dtos/requests/CreateGym.request.dto';
import { AddressRepository } from '../../../../address/infra/db/repositories/address.repository';

@Injectable()
export class GymRepository implements GymRepositoryInterface {
  public encryptedFields: (keyof Gym)[] = ['phone_number', 'imageUrl'];

  constructor(
    private encrypterProvider: EncrypterProvider,
    @Inject()
    private readonly addressRepository: AddressRepository,
  ) {}

  /* This method will be used to find all gyms */
  async findAll(): Promise<FindGymByIDDto[]> {
    const gyms = await prisma.gym.findMany({
      where: { deletedAt: null },
      include: {
        address: {
          select: {
            id_address: true,
            street: true,
            number: true,
            city: true,
            cep: true,
            uf_id: true,
            complement: true,
          },
        },
      },
    });

    return gyms?.map((gym) => {
      const decryptedGym = this.encrypterProvider.decryptData(
        gym,
        this.encryptedFields as (keyof typeof gym)[],
      );
      return {
        id_gym: decryptedGym.id_gym,
        name: decryptedGym.name,
        address: {
          id_address: decryptedGym.address?.id_address,
          complement: decryptedGym.address?.complement,
          city: decryptedGym.address?.city,
          cep: decryptedGym.address?.cep,
          uf_id: decryptedGym.address?.uf_id,
          street: decryptedGym.address?.street,
          number: decryptedGym.address?.number,
        },
        phone_number: decryptedGym.phone_number,
        imageUrl: decryptedGym.imageUrl,
        created_at: decryptedGym.createdAt?.toISOString(),
      } as FindGymByIDDto;
    });
  }

  /* This method will be used to find a single gym by its id */
  async findById(id: string): Promise<FindGymByIDDto | null> {
    const gym = await prisma.gym.findUnique({
      where: { id_gym: id, deletedAt: null },
      include: {
        address: {
          select: {
            id_address: true,
            street: true,
            number: true,
            city: true,
            cep: true,
            uf_id: true,
            complement: true,
          },
        },
      },
    });

    if (!gym) {
      return null;
    }

    const decryptedGym = this.encrypterProvider.decryptData(
      gym,
      this.encryptedFields as (keyof typeof gym)[],
    );

    return {
      id_gym: decryptedGym.id_gym,
      name: decryptedGym.name,
      address: {
        id_address: decryptedGym.address?.id_address,
        complement: decryptedGym.address?.complement,
        city: decryptedGym.address?.city,
        cep: decryptedGym.address?.cep,
        uf_id: decryptedGym.address?.uf_id,
        street: decryptedGym.address?.street,
        number: decryptedGym.address?.number,
      },
      phone_number: decryptedGym.phone_number,
      imageUrl: decryptedGym.imageUrl,
      created_at: decryptedGym.createdAt?.toISOString(),
    } as FindGymByIDDto;
  }

  /* Creating Gyms */
  async create(
    data: CreateGymBodyDTO,
    admin_id: string,
  ): Promise<Partial<Gym>> {
    const encryptedData = this.encrypterProvider.encryptData(
      data,
      this.encryptedFields as (keyof typeof data)[],
    );

    const gym = await prisma.gym.create({
      data: {
        name: encryptedData.name,
        phone_number: encryptedData.phone_number,
        address: {
          create: {
            cep: encryptedData.address.cep,
            street: encryptedData.address.street,
            number: encryptedData.address.number,
            complement: encryptedData.address.complement,
            city: encryptedData.address.city,
            uf: {
              connect: { id_uf: data.address.uf_id },
            },
          },
        },
        imageUrl: encryptedData.imageUrl,
        createdBy: {
          connect: { id_administrator: admin_id },
        },
      },
    });

    return this.encrypterProvider.decryptData(gym, this.encryptedFields);
  }
}
