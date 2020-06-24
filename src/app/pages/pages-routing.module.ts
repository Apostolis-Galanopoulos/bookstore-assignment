import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
        data: { title: 'Search' }
      },
      {
        path: 'addBook',
        loadChildren: () => import('./add-book/add-book.module').then(m => m.AddBookModule),
        data: { title: 'Add Book' }
      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
