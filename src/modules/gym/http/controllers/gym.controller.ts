import { Controller } from '@nestjs/common';
import { GymControllerInterface } from '../../domain/dtos/controllers/gym-controller.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Academias')
@Controller('gyms')
export class GymController implements GymControllerInterface {}
