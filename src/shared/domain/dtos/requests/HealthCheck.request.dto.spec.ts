import { HealthCheckRequestDto } from './HealthCheck.request.dto';

describe('HealthCheckRequestDto', () => {
  it('should be defined', () => {
    expect(new HealthCheckRequestDto()).toBeDefined();
  });
});
