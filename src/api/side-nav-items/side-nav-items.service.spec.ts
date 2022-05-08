import { Test, TestingModule } from '@nestjs/testing';
import { SideNavItemsService } from './side-nav-items.service';

describe('SideNavItemsService', () => {
  let service: SideNavItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SideNavItemsService],
    }).compile();

    service = module.get<SideNavItemsService>(SideNavItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
