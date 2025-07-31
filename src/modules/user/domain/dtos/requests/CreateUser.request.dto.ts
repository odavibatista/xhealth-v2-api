import { createZodDto } from 'nestjs-zod'
import z from 'zod'

export const CreateUserBodySchema = z.object({
  name: z.string().min(1).max(255).describe('Nome do usuário'),
  email: z.string().min(1).max(255).describe('Email do usuário'),
  phone_number: z.string().min(1).max(255).describe('Telefone do usuário'),
  password: z.string().min(1).max(255).optional().describe('Senha do usuário'),
  password_confirmation: z.string().min(1).max(255).optional().describe('Confirmação de senha do usuário'),
  birth_date: z.string().min(1).max(255).describe('Data de nascimento do usuário'),
  check_privacy: z.boolean().describe('Aceite da política de privacidade'),
  gym_plan_id: z.string().min(1).max(255).describe('ID do plano de academia do usuário'),
  address: z.object({
    cep: z.string().min(1).max(255).describe('CEP do usuário'),
    street: z.string().min(1).max(255).describe('Rua do usuário'),
    number: z.string().min(1).max(255).describe('Número do usuário'),
    complement: z.string().max(255).optional().describe('Complemento do usuário'),
    uf_id: z.number().describe('UF ID relacionado ao endereço do usuário'),
    city: z.string().min(1).max(255).describe('Cidade do usuário')
  }).required().describe('Endereço do usuário')
})

export class CreateUserBodyDTO extends createZodDto(CreateUserBodySchema){}





