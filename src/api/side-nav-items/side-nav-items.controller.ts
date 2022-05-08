import { Controller, Get } from '@nestjs/common';
import { SideNavItem } from 'src/interfaces/side-nav-item.interface';
import { SideNavItemsService } from './side-nav-items.service';

@Controller('side-nav-items')
export class SideNavItemsController {

  constructor(private sideNavItemsService: SideNavItemsService) {}

  @Get()
  findAll(): SideNavItem[] {
    return this.sideNavItemsService.sideNavItems;
  }
}
