import { UserLoginUsecase } from './user-login.usecase';

describe('UserLoginUsecase', () => {
  it('should be defined', () => {
    expect(new UserLoginUsecase()).toBeDefined();
  });
});
