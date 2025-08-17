import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const FindExtraServiceByIdSchema = z.object({
  id_extra_service: z.string().describe('ID do serviço extra a ser encontrado'),
  name: z.string().describe('Nome do serviço extra'),
  description: z.string().describe('Descrição do serviço extra'),
  price: z.string().describe('Preço do serviço extra'),
  imageUrl: z.string().describe('URL da imagem do serviço extra'),
});

export class FindExtraServiceByIdDto extends createZodDto(
  FindExtraServiceByIdSchema,
) {}
