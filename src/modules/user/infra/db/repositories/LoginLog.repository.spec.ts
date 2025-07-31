import { LoginLogsRepository } from './LoginLog.repository';

describe('LoginlogRepository', () => {
  it('should be defined', () => {
    expect(new LoginLogsRepository()).toBeDefined();
  });
});
