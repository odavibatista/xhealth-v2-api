import { PasswordRepository } from './Password.repository';

describe('PasswordRepository', () => {
  it('should be defined', () => {
    expect(new PasswordRepository()).toBeDefined();
  });
});
