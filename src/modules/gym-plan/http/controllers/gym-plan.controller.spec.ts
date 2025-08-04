import { Test, TestingModule } from '@nestjs/testing';
import { GymPlanController } from './gym-plan.controller';

describe('GymPlanController', () => {
  let controller: GymPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymPlanController],
    }).compile();

    controller = module.get<GymPlanController>(GymPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
