import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const FindGymByIDSchema = z.object({
  id_gym: z.string(),
  name: z.string(),
  address: z.object({
    id_address: z.string(),
    cep: z.string(),
    street: z.string(),
    complement: z.string().optional(),
    city: z.string(),
    uf_id: z.string(),
  }),
  phone_number: z.string(),
  imageUrl: z.string(),
  created_at: z.string(),
});

export class FindGymByIDDto extends createZodDto(FindGymByIDSchema) {}
