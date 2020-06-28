import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookById } from 'src/app/@core/books/selectors';
import { BookState } from 'src/app/@core/books/books.state';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/@core/books/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'bookstore-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.scss']
})
export class BookDisplayComponent implements OnInit {

  books: Book[];
  book: Book;

  constructor(private store: Store<BookState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.store.pipe(select(selectBookById, { id: id })).subscribe((item: Book[]) => this.books = item);
    this.book = [...this.books].shift();
  }

}
