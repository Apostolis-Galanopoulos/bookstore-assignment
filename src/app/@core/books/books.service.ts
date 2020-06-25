import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookState } from './books.state';
import * as BookActions from './books.actions';
import { Book } from './books';
import { BOOKS } from './books.mock';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private store: Store<BookState>) { }

  getBooks(): void {
    const booksData: Book[] = BOOKS;
    console.log(booksData);
    booksData.forEach((book: Book) => {
      this.addBook(book);
    });
  }

  addBook(book: Book): void {
    this.store.dispatch(new BookActions.AddBook(book));
  }

}
