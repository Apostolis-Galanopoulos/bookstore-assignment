import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/@core/books/books';

@Component({
  selector: 'bookstore-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }
}
