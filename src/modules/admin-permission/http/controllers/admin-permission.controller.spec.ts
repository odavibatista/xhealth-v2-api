import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionController } from './admin-permission.controller';

describe('AdminPermissionController', () => {
  let controller: AdminPermissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminPermissionController],
    }).compile();

    controller = module.get<AdminPermissionController>(
      AdminPermissionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
