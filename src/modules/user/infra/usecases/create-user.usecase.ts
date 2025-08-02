import { UnprocessableEntityException } from '@nestjs/common';
import { UseCaseInterface } from '../../../../shared/domain/protocols/UseCase.protocol';
import { EmailAlreadyRegisteredException } from '../../domain/dtos/errors/EmailAlreadyRegistered.exception';
import { PhoneNumberAlreadyRegisteredException } from '../../domain/dtos/errors/PhoneNumberAlreadyRegistered.exception';
import { UserRepository } from '../db/repositories/user.repository';
import { HashProvider } from '../providers/hash.provider';
import { JWTProvider } from '../providers/jwt.provider';
import {
  CreateUserBodyDTO,
  CreateUserResponseDTO,
} from '../../domain/dtos/requests/CreateUser.request.dto';
import {
  validateAddress,
  validateAge,
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from '../../../../shared/infra/utils/functions/validators';

export class CreateUserUseCase implements UseCaseInterface {
  constructor(
    private hashProvider: HashProvider,
    private userRepository: UserRepository,
    private jwtProvider: JWTProvider,
  ) {}

  async execute(
    data: CreateUserBodyDTO,
  ): Promise<
    | CreateUserResponseDTO
    | PhoneNumberAlreadyRegisteredException
    | EmailAlreadyRegisteredException
    | UnprocessableEntityException
  > {
    validateAddress({
      cep: data.address.cep,
      street: data.address.street,
      number: data.address.number,
      city: data.address.city,
      uf: Number(data.address.uf_id),
    });

    const isNameValid = validateName(data.name);

    if (!isNameValid) {
      throw new UnprocessableEntityException('Nome inválido');
    }

    const isEmailValid = validateEmail(data.email);

    if (!isEmailValid) {
      throw new UnprocessableEntityException('E-mail inválido');
    }

    const isPhoneValid = validatePhone(data.phone_number);

    if (!isPhoneValid) {
      throw new UnprocessableEntityException('Número de telefone inválido');
    }

    const isAgeValid = validateAge(new Date(data.birth_date));

    if (!isAgeValid) {
      throw new UnprocessableEntityException('Idade inválida');
    }

    const isPasswordValid = validatePassword(data.password);

    if (!isPasswordValid) {
      throw new UnprocessableEntityException('Senha inválida');
    }

    const emailAlreadyRegistered = await this.userRepository.findByEmail(
      data.email,
    );

    if (emailAlreadyRegistered) {
      throw new EmailAlreadyRegisteredException();
    }

    const phoneAlreadyRegistered = await this.userRepository.findByPhoneNumber(
      data.phone_number,
    );

    if (phoneAlreadyRegistered) {
      throw new PhoneNumberAlreadyRegisteredException();
    }

    if (
      !data.password ||
      !data.password_confirmation ||
      data.password !== data.password_confirmation
    ) {
      throw new UnprocessableEntityException();
    }

    delete data.password_confirmation;

    data.password = await this.hashProvider.hash(data.password);

    const user = await this.userRepository.create(data);

    if (!user.id_user) {
      throw new UnprocessableEntityException('Error creating user');
    }

    const token = this.jwtProvider.generate({
      payload: {
        id_user: user.id_user,
        name: user.name,
        plan_id: user.gym_plan_id,
      },
    });

    return {
      token,
      id: user.id_user,
    };
  }
}
