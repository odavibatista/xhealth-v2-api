import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const AddPermissionRequestSchema = z.object({
  admin_id: z.string().min(1).max(255).describe('ID do administrador'),
  permission: z.string().min(1).max(255).describe('Permissão a ser adicionada'),
});

export class AddPermissionRequestDTO extends createZodDto(
  AddPermissionRequestSchema,
) {}

export const AddPermissionResponseSchema = z.object({
  admin: z
    .object({
      id_admin: z.string().describe('ID do administrador autenticado'),
      name: z.string().describe('Nome do administrador autenticado'),
    })
    .describe('Dados do administrador autenticado'),
  added_permission: z.string().min(1).max(255).describe('Permissão do administrador que foi adicionada'),
});

export class AddPermissionResponseDTO extends createZodDto(
  AddPermissionResponseSchema,
) {}
