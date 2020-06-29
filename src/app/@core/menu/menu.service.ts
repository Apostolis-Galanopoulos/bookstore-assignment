import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MENUS } from './menu.mock';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  /**
   * @description get menu item from static files
   */
  getMenu(): Observable<Menu[]> {
    return of(MENUS);
  }
}
