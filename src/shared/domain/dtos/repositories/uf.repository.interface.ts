import { UF } from "@prisma/client";

export interface UfRepositoryInterface {
    findAll(): Promise<Partial<UF>[]>;
    findById(id_uf: string): Promise<Partial<UF> | null>;
}