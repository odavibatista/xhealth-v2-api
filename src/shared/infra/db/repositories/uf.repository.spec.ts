import { UfRepository } from './uf.repository';
import { faker } from '@faker-js/faker';

describe('UF Repository Test Suites', () => {
  let repository: UfRepository;

  beforeEach(() => {
    jest.useFakeTimers({ doNotFake: ['nextTick'] });
  });

  beforeEach(() => {
    repository = new UfRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  const mockUfs = [
    {
      id_uf: faker.string.uuid(),
      name: faker.location.state(),
      acronym: faker.string.alpha({ length: 2 }),
      ibge_id: faker.string.numeric({ length: 7 }),
    },
  ];

  describe('findAll method tests', () => {
    it('should return a list of all UFs', async () => {
      jest.spyOn(repository, 'findAll').mockResolvedValueOnce(mockUfs as any);

      const result = await repository.findAll();

      expect(result).toEqual(mockUfs);
    });
  });

  describe('findById method tests', () => {
    it('should return a UF by its ID', async () => {
      const mockUf = mockUfs[0];

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(mockUf as any);

      const result = await repository.findById(mockUf.id_uf);

      expect(result).toEqual(mockUf);
    });

    it('should return null if no UF is found with the given ID', async () => {
      const nonExistentId = faker.string.uuid();

      jest.spyOn(repository, 'findById').mockResolvedValueOnce(null);

      const result = await repository.findById(nonExistentId);

      expect(result).toBeNull();
    });
  });
});
