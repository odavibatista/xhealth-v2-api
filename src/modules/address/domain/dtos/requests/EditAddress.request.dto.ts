import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const EditAddressBodySchema = z.object({
  cep: z.string().min(1).max(255).describe('CEP da academia'),
  street: z.string().min(1).max(255).describe('Rua da academia'),
  number: z.string().min(1).max(255).describe('Número da academia'),
  complement: z
    .string()
    .max(255)
    .optional()
    .describe('Complemento da academia'),
  uf_id: z.string().describe('ID da UF relacionada ao endereço da academia'),
  city: z.string().min(1).max(255).describe('Cidade da academia'),
});

export class EditAddressBodyDTO extends createZodDto(EditAddressBodySchema) {}
