import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const FindTrainerByIDSchema = z.object({
  id_trainer: z.string(),
  imgUrl: z.string(),
  name: z.string(),
  instagramUrl: z.string(),
  twitterUrl: z.string(),
  youtubeUrl: z.string(),
});

export class FindTrainerByIDDto extends createZodDto(FindTrainerByIDSchema) {}
