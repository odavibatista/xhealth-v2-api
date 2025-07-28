import { GymPlanRepository } from './gym-plan.repository';

describe('GymPlansRepository', () => {
  it('should be defined', () => {
    expect(new GymPlanRepository()).toBeDefined();
  });
});
