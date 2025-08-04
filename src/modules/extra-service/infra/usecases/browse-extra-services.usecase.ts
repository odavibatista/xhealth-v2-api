import { UseCaseInterface } from "../../../../shared/domain/protocols/UseCase.protocol";
import { FindExtraServiceByIdDto } from "../../domain/dtos/requests/FindExtraServiceById.request.dto";
import { ExtraServiceRepository } from "../db/repositories/extra-service.repository";

export class BrowseExtraServicesUsecase implements UseCaseInterface {
    constructor(private extraServiceRepository: ExtraServiceRepository) {}
    
  async execute(
  ): Promise<FindExtraServiceByIdDto[]> {
    const extraServices = await this.extraServiceRepository.findAll();

    return extraServices.map((extraService) => ({
      id_extra_service: extraService.id_extra_service,
      name: extraService.name,
      description: extraService.description,
      price: extraService.price,
      imageUrl: extraService.imageUrl,
    })) as FindExtraServiceByIdDto[];
  }
}
