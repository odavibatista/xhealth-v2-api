import { AddressRepository } from './address.repository';

describe('AddressRepository', () => {
  it('should be defined', () => {
    expect(new AddressRepository()).toBeDefined();
  });
});
