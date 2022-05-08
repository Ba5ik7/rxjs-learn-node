import { Test, TestingModule } from '@nestjs/testing';
import { SideNavItemsController } from './side-nav-items.controller';

describe('SideNavItemsController', () => {
  let controller: SideNavItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SideNavItemsController],
    }).compile();

    controller = module.get<SideNavItemsController>(SideNavItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
