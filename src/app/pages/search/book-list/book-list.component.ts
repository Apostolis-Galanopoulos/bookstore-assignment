import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/@core/books/books';
import { BookState } from 'src/app/@core/books/books.state';
import { BooksService } from 'src/app/@core/books/books.service';

@Component({
  selector: 'bookstore-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store: Store<BookState>, private booksService: BooksService) {
    this.booksService.getBooks();
    this.books = this.store.select('book');
  }

  ngOnInit(): void {
  }

}
