import { UnprocessableDataException } from '../../../../domain/errors/UnprocessableData.exception';
import { validateCep } from './validateCep';
import { validateComplement } from './validateComplement';
import { validateName } from './validateName';
import { validateNumber } from './validateNumber';
import { validateStreet } from './validateStreet';

export interface IAddressObject {
  uf: number;
  city: string;
  cep: string;
  street: string;
  number: string;
  complement?: string;
}

export const validateAddress = (address: IAddressObject): boolean => {
  if (!validateName(address.city))
    throw new UnprocessableDataException(
      'Cidades devem possuir entre 3 e 50 caracteres e não podem conter números e caracteres especiais.',
    );

  if (!validateStreet(address.street))
    throw new UnprocessableDataException(
      'Ruas devem possuir entre 1 e 100 caracteres e não podem conter caracteres especiais.',
    );

  if (!validateNumber(address.number))
    throw new UnprocessableDataException(
      'Número de endereço deve possuir entre 1 e 6 caracteres e não podem conter letras ou caracteres especiais.',
    );

  if (!validateCep(address.cep))
    throw new UnprocessableDataException('CEP inválido.');

  if (address.city.length < 3)
    throw new UnprocessableDataException(
      'Nomes de cidades devem possuir pelo menos três caracteres.',
    );

  if (address.city.length > 50)
    throw new UnprocessableDataException(
      'Nomes de cidades devem possuir no máximo cinquenta caracteres.',
    );

  if (address.city.length < 1)
    throw new UnprocessableDataException(
      'Rua deve possuir pelo menos um caractere.',
    );

  if (address.city.length > 100)
    throw new UnprocessableDataException(
      'Rua não pode ter mais de 100 caracteres.',
    );

  if (address.number.length < 1)
    throw new UnprocessableDataException(
      'Número de endereço deve possuir pelo menos um caractere.',
    );

  if (address.number.length > 10)
    throw new UnprocessableDataException(
      'Número de endereço deve possuir no máximo dez caracteres.',
    );

  if (address.complement && !validateComplement(address.complement))
    throw new UnprocessableDataException(
      'Complemento deve conter apenas letras, números e hífen e não pode ter mais de 100 caracteres.',
    );
  else return true;
};
