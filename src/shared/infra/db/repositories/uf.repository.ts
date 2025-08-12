import { UF } from '@prisma/client';
import { UfRepositoryInterface } from '../../../domain/dtos/repositories/uf.repository.interface';
import { prisma } from '../prisma';

export class UfRepository implements UfRepositoryInterface {
  constructor() {}

  async findAll(): Promise<Partial<UF>[]> {
    const ufs = await prisma.uF.findMany({
      select: {
        id_uf: true,
        name: true,
        acronym: true,
        ibge_id: true,
      },
    });

    return ufs;
  }

  async findById(id_uf: string): Promise<Partial<UF> | null> {
    const uf = await prisma.uF.findUnique({
      where: {
        id_uf: id_uf,
      },
      select: {
        id_uf: true,
        name: true,
        acronym: true,
        ibge_id: true,
      },
    });

    return uf;
  }
}
