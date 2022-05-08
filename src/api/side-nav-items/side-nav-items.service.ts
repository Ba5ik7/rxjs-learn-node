import { Injectable } from '@nestjs/common';
import { SideNavItem } from 'src/interfaces/side-nav-item.interface';

@Injectable()
export class SideNavItemsService {

  get sideNavItems(): SideNavItem[] {
    const sideNavItems = [
      { 
        name: 'operators',
        link: 'operators',
        subSideNavItems: [
          {
            name: 'combination',
            link: 'combination',
            subSideNavItems: [
              {
                name: 'combineall',
                link: 'combineall',
              },
            ]
          },
          {
            name: 'conditional',
            link: 'conditional',
            subSideNavItems: [
              {
                name: 'defaultifempty',
                link: 'defaultifempty',
              },
            ]
          }
        ]
      },
      {
        name: 'subjects',
        link: 'subjects',
        subSideNavItems: [
          {
            name: 'asyncsubject',
            link: 'asyncsubject',
          }
        ]
      }
    ]
    return sideNavItems;
  }
}
