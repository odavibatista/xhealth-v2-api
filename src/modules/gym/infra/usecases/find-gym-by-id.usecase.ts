import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { GymRepository } from '../db/repositories/gym.repository';
import { FindGymByIDDto } from '../../domain/dtos/requests/FindGymByID.request.dto';
import { GymNotFoundException } from '../../domain/dtos/errors/GymNotFoundException.exception';

export class FindGymByIdUsecase implements UseCaseInterface {
  constructor(
    @Inject()
    private gymRepository: GymRepository,
  ) {}

  async execute(cuid: string): Promise<FindGymByIDDto | GymNotFoundException> {
    const gym = await this.gymRepository.findById(cuid);

    if (!gym) {
      throw new GymNotFoundException();
    }

    return {
      id_gym: gym.id_gym,
      name: gym.name,
      address: {
        id_address: gym.address.id_address,
        complement: gym.address.complement,
        city: gym.address.city,
        cep: gym.address.cep,
        uf_id: gym.address.uf_id,
        street: gym.address.street,
      },
      phone_number: gym.phone_number,
      imageUrl: gym.imageUrl,
      created_at: gym.created_at,
    } as FindGymByIDDto;
  }
}
