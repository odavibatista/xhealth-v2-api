import { Gym } from '@prisma/client';
import { GymRepositoryInterface } from '../../../domain/dtos/repositories/gym.repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { prisma } from '../../../../../shared/infra/db/prisma';
import { FindGymByIDDto } from '../../../domain/dtos/requests/FindGymByID.request.dto';
import { EncrypterProvider } from '../../../../../shared/infra/providers/Encrypter.provider';
import {
  CreateGymBodyDTO,
  CreateGymResponseDTO,
} from '../../../domain/dtos/requests/CreateGym.request.dto';

@Injectable()
export class GymRepository implements GymRepositoryInterface {
  public encryptedFields: (keyof Gym)[] = ['name', 'phone_number', 'imageUrl'];

  constructor(private encrypterProvider: EncrypterProvider) {}

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

  /* Finding by a phonenumber */
  async findByPhoneNumber(
    phone_number: string,
  ): Promise<FindGymByIDDto | null> {
    const encPhone = this.encrypterProvider.encrypt({ content: phone_number });

    const gym = await prisma.gym.findFirst({
      where: { phone_number: encPhone, deletedAt: null },
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
  ): Promise<CreateGymResponseDTO> {
    const gym = await prisma.gym.create({
      data: {
        name: this.encrypterProvider.encrypt({ content: data.name }),
        phone_number: this.encrypterProvider.encrypt({
          content: data.phone_number,
        }),
        address: {
          create: {
            cep: this.encrypterProvider.encrypt({ content: data.address.cep }),
            street: this.encrypterProvider.encrypt({
              content: data.address.street,
            }),
            number: this.encrypterProvider.encrypt({
              content: data.address.number,
            }),
            complement: this.encrypterProvider.encrypt({
              content: data.address.complement,
            }),
            city: this.encrypterProvider.encrypt({
              content: data.address.city,
            }),
            uf: {
              connect: { id_uf: data.address.uf_id },
            },
          },
        },
        imageUrl: this.encrypterProvider.encrypt({ content: data.imageUrl }),
        createdBy: {
          connect: { id_administrator: admin_id },
        },
      },
    });

    return {
      id_gym: gym.id_gym,
      name: this.encrypterProvider.decrypt({
        content: gym.name,
      }),
      phone_number: this.encrypterProvider.decrypt({
        content: gym.phone_number,
      }),
      imageUrl: this.encrypterProvider.decrypt({
        content: gym.imageUrl,
      }),
      address: {
        id_address: gym.address_id,
        cep: data.address.cep,
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement,
        uf_id: data.address.uf_id,
        city: data.address.city,
      },
      created_at: String(gym.createdAt),
      updated_at: String(gym.updatedAt),
      created_by: admin_id,
    };
  }
}
