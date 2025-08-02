import { ExtraService } from "@prisma/client";
import { UseCaseInterface } from "../../../../shared/domain/protocols/UseCase.protocol";
import { ExtraServiceRepository } from "../db/repositories/extra-service.repository";

export class FindExtraServiceUsecase implements UseCaseInterface {
    constructor(private extraServiceRepository: ExtraServiceRepository) {}

    async execute(id: string): Promise<ExtraService | null> {
        const extraService = await this.extraServiceRepository.findById(id);

        if (!extraService) return null;

        return extraService;
    }
}
