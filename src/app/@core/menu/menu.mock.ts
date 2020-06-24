import { Menu } from './menu';

/**
 * @description menu data for breadcrumb
 */
export const MENUS: Menu[] = [
    {
      name: 'Home',
      icon: '',
      path: 'pages',
      children: [
        {
          name: 'Search',
          icon: '',
          path: 'search',
        },
        {
          name: 'Add new Book',
          icon: '',
          path: 'addBook',
        },
        {
          name: 'Category',
          icon: '',
          path: 'category',
        }
      ]
    },
  ];
