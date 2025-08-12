import { UseCaseInterface } from "../../../../shared/domain/protocols/UseCase.protocol";

export class DeleteGymUsecase implements UseCaseInterface {
    async execute(id_gym: string, admin_id: string): Promise<boolean> {
    }
}
