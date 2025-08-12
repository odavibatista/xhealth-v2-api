import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const EditGymBodySchema = z.object({
  name: z.string().min(1).max(255).describe('Nome da academia'),
  phone_number: z.string().min(1).max(255).describe('Telefone da academia'),
  imageUrl: z.string().min(1).max(255).describe('URL da imagem da academia'),
  address: z
    .object({
      cep: z.string().min(1).max(255).describe('CEP da academia'),
      street: z.string().min(1).max(255).describe('Rua da academia'),
      number: z.string().min(1).max(255).describe('Número da academia'),
      complement: z
        .string()
        .max(255)
        .optional()
        .describe('Complemento da academia'),
      uf_id: z
        .string()
        .describe('ID da UF relacionada ao endereço da academia'),
      city: z.string().min(1).max(255).describe('Cidade da academia'),
    })
    .required()
    .describe('Endereço da academia'),
});

export class EditGymBodyDTO extends createZodDto(EditGymBodySchema) {}

export const EditGymResponseSchema = z.object({
  id_gym: z.string().describe('ID da academia criada'),
  name: z.string().describe('Nome da academia criada'),
  address: z.object({
    id_address: z.string().describe('ID do endereço da academia criada'),
    cep: z.string().describe('CEP da academia criada'),
    street: z.string().describe('Rua da academia criada'),
    number: z.string().describe('Número da academia criada'),
    complement: z
      .string()
      .optional()
      .describe('Complemento da academia criada'),
    uf_id: z
      .string()
      .describe('ID da UF relacionada ao endereço da academia criada'),
    city: z.string().describe('Cidade da academia criada'),
  }),
  phone_number: z.string().describe('Telefone da academia criada'),
  imageUrl: z.string().describe('URL da imagem da academia criada'),
  created_by: z.string().describe('ID do administrador que criou a academia'),
  created_at: z.string().describe('Data de criação da academia'),
  updated_at: z.string().describe('Data de atualização da academia'),
});

export class EditGymResponseDTO extends createZodDto(EditGymResponseSchema) {}
