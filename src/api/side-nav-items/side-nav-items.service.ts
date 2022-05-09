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
            link: 'operators/combination',
            subSideNavItems: [
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
              {
                name: 'combineall',
                link: 'operators/combination/combineall'
              },
            ]
          },
          {
            name: 'conditional',
            link: 'operators/conditional',
            subSideNavItems: [
              {
                name: 'defaultifempty',
                link: 'operators/conditional/defaultifempty'
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
            link: 'subjects/asyncsubject'
          }
        ]
      }
    ]
    return sideNavItems;
  }
}
