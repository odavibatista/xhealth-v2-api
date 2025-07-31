import { ExtraService } from "@prisma/client";

export interface ExtraServiceRepositoryInterface {
  encryptedFields: (keyof ExtraService)[]; // Add the appropriate type for ExtraService
}
