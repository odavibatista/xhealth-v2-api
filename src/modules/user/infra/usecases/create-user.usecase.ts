import { UnprocessableEntityException } from "@nestjs/common";
import { UseCaseInterface } from "../../../../shared/domain/protocols/UseCase.protocol";
import { EmailAlreadyRegisteredException } from "../../domain/dtos/errors/EmailAlreadyRegistered.exception";
import { PhoneNumberAlreadyRegisteredException } from "../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception";
import { UserRepository } from "../db/repositories/User.repository";
import { HashProvider } from "../providers/hash.provider";
import { JWTProvider } from "../providers/jwt.provider";
import { CreateUserBodyDTO } from "../../domain/dtos/requests/CreateUser.request.dto";

export class CreateUserUseCase implements UseCaseInterface {
    constructor(
        private hashProvider: HashProvider,
        private userRepository: UserRepository,
        private jwtProvider: JWTProvider
    ) {}

    async execute(data: CreateUserBodyDTO): Promise<{token: string, id: string} | PhoneNumberAlreadyRegisteredException | EmailAlreadyRegisteredException> {
        const emailAlreadyRegistered = await this.userRepository.findByEmail(data.email);

        if (emailAlreadyRegistered) {
            throw new EmailAlreadyRegisteredException();
        }

        const phoneAlreadyRegistered = await this.userRepository.findByPhoneNumber(data.phone_number);

        if (phoneAlreadyRegistered) {
            throw new PhoneNumberAlreadyRegisteredException();
        }

        if (!data.password || !data.password_confirmation || data.password !== data.password_confirmation) {
        throw new UnprocessableEntityException()
        }

        delete data.password_confirmation

        data.password = await this.hashProvider.hash(data.password)

        const user = await this.userRepository.create(data);

        if (!user.id_user) {
            throw new UnprocessableEntityException('Error creating user');
        }

        const token = this.jwtProvider.generate({
            payload: {
                id_user: user.id_user,
                name: user.name,
                plan_id: user.gym_plan_id,
            }
        })

        if (!token) {
            throw new UnprocessableEntityException('Error generating token');
        }

        return {
            token,
            id: user.id_user,
        }
    }
}