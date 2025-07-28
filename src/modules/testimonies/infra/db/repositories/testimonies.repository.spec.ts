import { TestimoniesRepository } from './testimonies.repository';

describe('TestimoniesRepository', () => {
  it('should be defined', () => {
    expect(new TestimoniesRepository()).toBeDefined();
  });
});
