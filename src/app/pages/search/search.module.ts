import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { SearchPipe } from './book-list/search.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from 'src/app/@theme/theme.module';

@NgModule({
  declarations: [SearchComponent, SearchBoxComponent, SearchFilterComponent, BookListComponent, BookItemComponent, SearchPipe],
  imports: [
    ThemeModule,
    ReactiveFormsModule,
    SearchRoutingModule,
    CommonModule
  ],
  providers: [],
})
export class SearchModule { }
