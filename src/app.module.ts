import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SideNavItemsController } from './api/side-nav-items/side-nav-items.controller';
import { SideNavItemsService } from './api/side-nav-items/side-nav-items.service';

@Module({
  imports: [],
  controllers: [AppController, SideNavItemsController],
  providers: [AppService, SideNavItemsService],
})
export class AppModule {}
