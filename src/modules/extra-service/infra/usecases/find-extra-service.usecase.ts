import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { ExtraServiceRepository } from '../db/repositories/extra-service.repository';
import { ServiceNotFoundException } from '../../domain/dtos/errors/ServiceNotFound.exception';
import { FindExtraServiceByIdDto } from '../../domain/dtos/requests/FindExtraServiceById.request.dto';

export class FindExtraServiceUsecase implements UseCaseInterface {
  constructor(private extraServiceRepository: ExtraServiceRepository) {}

  async execute(
    id: string,
  ): Promise<FindExtraServiceByIdDto | ServiceNotFoundException> {
    const extraService = await this.extraServiceRepository.findById(id);
    
    if (!extraService) throw new ServiceNotFoundException()

    return {
      id_extra_service: extraService.id_extra_service,
      name: extraService.name,
      description: extraService.description,
      price: extraService.price,
      imageUrl: extraService.imageUrl,
    } as FindExtraServiceByIdDto;
  }
}
