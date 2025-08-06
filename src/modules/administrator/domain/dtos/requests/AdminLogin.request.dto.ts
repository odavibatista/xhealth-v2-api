import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const AdminLoginRequestSchema = z.object({
  email: z.string().min(1).max(255).describe('Email do administrador'),
  password: z.string().min(1).max(255).describe('Senha do administrador'),
});

export class AdminLoginRequestDTO extends createZodDto(
  AdminLoginRequestSchema,
) {}

export const AdminLoginResponseSchema = z.object({
  token: z.string().describe('Token de autenticação do administrador'),
  admin: z
    .object({
      id_admin: z.string().describe('ID do administrador autenticado'),
      name: z.string().describe('Nome do administrador autenticado'),
    })
    .describe('Dados do administrador autenticado'),
});

export class AdminLoginResponseDTO extends createZodDto(
  AdminLoginResponseSchema,
) {}
