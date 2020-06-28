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
        path: 'book/:id',
        loadChildren: () => import('./book-display/book-display.module').then(m => m.BookDisplayModule),
        data: { title: 'Book Display' }
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
