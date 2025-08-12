import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const FindGymPlanByIDSchema = z.object({
  id_gym_plan: z.string().describe('ID do plano de academia a ser encontrado'),
  name: z.string().describe('Nome do plano de academia'),
  description: z.string().describe('Descrição do plano de academia'),
  price: z.string().describe('Preço do plano de academia'),
  duration: z.string().optional().describe('Duração do plano de academia'),
  features: z.array(
    z.object({
      id_gym_plan_feature: z
        .string()
        .describe('ID da feature do plano de academia'),
      feature_name: z.string().describe('Nome da feature do plano de academia'),
    }),
  ),
  createdAt: z.date().describe('Data de criação do plano de academia'),
});

export class FindGymPlanByIDDto extends createZodDto(FindGymPlanByIDSchema) {}
