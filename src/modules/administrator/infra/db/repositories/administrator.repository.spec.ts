import { AdministratorRepository } from './administrator.repository';

describe('AdministratorRepository', () => {
  it('should be defined', () => {
    expect(new AdministratorRepository()).toBeDefined();
  });
});
