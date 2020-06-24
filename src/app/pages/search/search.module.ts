import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BooksService } from 'src/app/@core/books/books.service';

@NgModule({
  declarations: [SearchComponent, SearchBoxComponent, SearchFilterComponent, BookListComponent, BookItemComponent],
  imports: [
    SearchRoutingModule,
    CommonModule
  ],
  providers: [BooksService, {provide : APP_INITIALIZER, useFactory : onLoad, deps: [BooksService] , multi : false}],
})
export class SearchModule { }


export function onLoad(booksService : BooksService)
{
  return ()=> booksService.getBooks();
}
