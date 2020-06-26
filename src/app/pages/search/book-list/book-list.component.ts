import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/@core/books/books';
import { BookState } from 'src/app/@core/books/books.state';
import { BooksService } from 'src/app/@core/books/books.service';
import { SearchService } from 'src/app/@core/search/search.service';

@Component({
  selector: 'bookstore-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  searchKey = '';
  books: Observable<Book[]>;

  constructor(private store: Store<BookState>, private searchService: SearchService) {
    console.log('BookListComponent constructor');
    this.books = this.store.select('book');
  }

  ngOnInit(): void {
    this.searchService.bookSearch$.subscribe((search: string) => {
      this.searchKey = search;
    });
  }

  ngOnDestroy(): void {
    this.searchService.searchAbook('');
  }

}
