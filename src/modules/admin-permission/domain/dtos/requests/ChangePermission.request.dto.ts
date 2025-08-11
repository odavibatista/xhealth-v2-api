import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const ChangePermissionRequestSchema = z.object({
  admin_id: z.string().min(1).max(255).describe('ID do administrador'),
  permission: z.string().min(1).max(255).describe('Permissão a ser alterada'),
});

export class ChangePermissionRequestDTO extends createZodDto(
  ChangePermissionRequestSchema,
) {}

export const ChangePermissionResponseSchema = z.object({
  admin: z
    .object({
      id_admin: z.string().describe('ID do administrador autenticado'),
      name: z.string().describe('Nome do administrador autenticado'),
    })
    .describe('Dados do administrador autenticado'),
  changed_permission: z
    .string()
    .min(1)
    .max(255)
    .describe('Permissão do administrador que foi alterada'),
});

export class ChangePermissionResponseDTO extends createZodDto(
  ChangePermissionResponseSchema,
) {}
