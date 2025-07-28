import { TestimoniesRepositoryInterface } from "./testimonies.repository";

describe('Testimony Repository Interface Test Suites', () => {
  const mockTestimoniesRepositoryInterface: TestimoniesRepositoryInterface = {
    encryptedFields: [],
    findById: jest.fn(),
    findByName: jest.fn(),
  };

  it('should have encryptedFields as an array of keys from Testimony', () => {
    expect(Array.isArray(mockTestimoniesRepositoryInterface.encryptedFields)).toBe(true);
  });

  it('should have findById method', () => {
    expect(typeof mockTestimoniesRepositoryInterface.findById).toBe('function');
  });

  it('should have findByName method', () => {
    expect(typeof mockTestimoniesRepositoryInterface.findByName).toBe('function');
  });
})