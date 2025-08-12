import { Inject, UnprocessableEntityException } from '@nestjs/common';
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
import { UfRepository } from '../../../../shared/infra/db/repositories/uf.repository';
import { GymRepository } from '../../../gym/infra/db/repositories/gym.repository';
import { AdministratorRepository } from '../../../administrator/infra/db/repositories/administrator.repository';
import { UFNotFoundException } from '../../../../shared/domain/dtos/errors/UFNotFound.exception.dto';
import { UnprocessableDataException } from '../../../../shared/domain/errors/UnprocessableData.exception';

export class CreateUserUseCase implements UseCaseInterface {
  constructor(
    private hashProvider: HashProvider,
    private jwtProvider: JWTProvider,
    @Inject()
    private userRepository: UserRepository,
    @Inject()
    private readonly ufRepository: UfRepository,
    @Inject()
    private readonly gymRepository: GymRepository,
    @Inject()
    private readonly adminRepository: AdministratorRepository,
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

    if (!isNameValid) throw new UnprocessableDataException('Nome inválido');

    const isEmailValid = validateEmail(data.email);

    if (!isEmailValid) throw new UnprocessableDataException('E-mail inválido');

    const isPhoneValid = validatePhone(data.phone_number);

    if (!isPhoneValid)
      throw new UnprocessableDataException('Número de telefone inválido');

    const isAgeValid = validateAge(new Date(data.birth_date));

    if (!isAgeValid) throw new UnprocessableDataException('Idade inválida');

    const isPasswordValid = validatePassword(data.password);

    if (!isPasswordValid)
      throw new UnprocessableDataException('Senha inválida');

    const isUfValid = await this.ufRepository.findById(data.address.uf_id);

    if (!isUfValid) throw new UFNotFoundException();

    const emailAlreadyRegisteredByUser = await this.userRepository.findByEmail(
      data.email,
    );

    if (emailAlreadyRegisteredByUser)
      throw new EmailAlreadyRegisteredException();

    const emailAlreadyRegisteredByAdmin =
      await this.adminRepository.findByEmail(data.email);

    if (emailAlreadyRegisteredByAdmin)
      throw new EmailAlreadyRegisteredException();

    const phoneAlreadyRegisteredByUser =
      await this.userRepository.findByPhoneNumber(data.phone_number);

    if (phoneAlreadyRegisteredByUser)
      throw new PhoneNumberAlreadyRegisteredException();

    const phoneAlreadyRegisteredByGym =
      await this.gymRepository.findByPhoneNumber(data.phone_number);

    if (phoneAlreadyRegisteredByGym)
      throw new PhoneNumberAlreadyRegisteredException();

    if (
      !data.password ||
      !data.password_confirmation ||
      data.password !== data.password_confirmation
    )
      throw new UnprocessableEntityException();

    delete data.password_confirmation;

    data.password = await this.hashProvider.hash(data.password);

    const user = await this.userRepository.create(data);

    if (!user.id_user) {
      throw new UnprocessableEntityException('Error creating user');
    }

    const token = this.jwtProvider.generate({
      payload: {
        user: {
          id_user: user.id_user,
          plan_id: user.gym_plan_id,
          name: user.name,
        },
      },
    });

    return {
      token,
      id: user.id_user,
    };
  }
}
