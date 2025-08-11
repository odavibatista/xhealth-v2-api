import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const RemovePermissionRequestSchema = z.object({
  admin_id: z.string().min(1).max(255).describe('ID do administrador'),
  permission: z.string().min(1).max(255).describe('Permissão a ser removida'),
});

export class RemovePermissionRequestDTO extends createZodDto(
  RemovePermissionRequestSchema,
) {}

export const RemovePermissionResponseSchema = z.object({
  admin: z
    .object({
      id_admin: z.string().describe('ID do administrador autenticado'),
      name: z.string().describe('Nome do administrador autenticado'),
    })
    .describe('Dados do administrador autenticado'),
  removed_permission: z
    .string()
    .min(1)
    .max(255)
    .describe('Permissão do administrador que foi removida'),
});

export class RemovePermissionResponseDTO extends createZodDto(
  RemovePermissionResponseSchema,
) {}
