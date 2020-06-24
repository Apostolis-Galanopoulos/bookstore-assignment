import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { MenuService } from 'src/app/@core/menu/menu.service';
import { Menu } from 'src/app/@core/menu/menu';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'bookstore-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbList: Array<Breadcrumb> = [];
  name: string;
  menu: Array<Menu> = [];

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {
    this.subscribeRouting();
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
    this.makeBreadcrumb(this.router.url);
  }

  /**
   * @description Monitoring routing event
   */
  private subscribeRouting() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((router: NavigationEnd) => {
      this.makeBreadcrumb(router.urlAfterRedirects);
    });
  }

  /**
   *
   * @description Create a breadcrumb item from the current URL
   */
  private makeBreadcrumb(routerUrl: string): void {
    let routerList: Array<string>;
    let listTarget: Menu[] = this.menu;
    let target: Menu;
    this.breadcrumbList.length = 0;
    // split the full URL into an array
    routerList = routerUrl.slice(1).split('/');
    // for each item of the array will be made a breadcrumb item
    routerList.forEach((router, index) => {
      // mapping the current place of URL with the corresponding menu item
        target = listTarget.find((page: Menu) => {
          return page.path === router;
        });
        this.breadcrumbList.push({
          name: target.name,
          path: (index === 0) ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
        });
        // if the current path has more one children then we replace the target item with object from the child
        if (index + 1 !== routerList.length) {
          listTarget = target.children;
        }
      });
  }

}
