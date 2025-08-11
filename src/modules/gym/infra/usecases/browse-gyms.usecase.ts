import { Inject } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { GymRepository } from '../db/repositories/gym.repository';
import { FindGymByIDDto } from '../../domain/dtos/requests/FindGymByID.request.dto';
import { EncrypterProvider } from '../../../../shared/infra/providers/Encrypter.provider';

export class BrowseGymsUsecase implements UseCaseInterface {
  constructor(
    private encrypterProvider: EncrypterProvider,
    @Inject()
    private gymRepository: GymRepository,
  ) {}

  async execute(): Promise<FindGymByIDDto[]> {
    const gyms = await this.gymRepository.findAll();

    return gyms?.map((gym) => ({
      id_gym: gym.id_gym,
      name: gym.name,
      address: {
        id_address: gym.address.id_address,
        city: this.encrypterProvider.decrypt({
          content: gym.address.city
        }),
        cep: this.encrypterProvider.decrypt({
          content: gym.address.cep
        }),
        uf_id: gym.address.uf_id,
        street: this.encrypterProvider.decrypt({
          content: gym.address.street
        }),
        complement: gym.address.complement ? this.encrypterProvider.decrypt({content: gym.address.complement}) : undefined,
      },
      phone_number: gym.phone_number,
      imageUrl: gym.imageUrl,
      created_at: gym.created_at,
    })) as FindGymByIDDto[];
  }
}
