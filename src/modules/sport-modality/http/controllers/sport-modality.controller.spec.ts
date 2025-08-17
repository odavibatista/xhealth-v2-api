import { Test, TestingModule } from '@nestjs/testing';
import { SportModalityController } from './sport-modality.controller';

describe('SportModalityController', () => {
  let controller: SportModalityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportModalityController],
    }).compile();

    controller = module.get<SportModalityController>(SportModalityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
