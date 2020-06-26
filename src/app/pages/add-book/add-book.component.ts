import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BooksService } from 'src/app/@core/books/books.service';
import { Book } from 'src/app/@core/books/books';

@Component({
  selector: 'bookstore-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bookService: BooksService, private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fromBuilder.group({
      title: [
        null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(120)
        ]
      ],
      subtitle: [
        null, [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(520)
        ]
      ],
    });

    const book: Book = {
      isbnTen: 9781449365035,
      isbnThirteen: 9781449365035,
      title: 'Test Book',
      subtitle: 'An In-Depth Guide for Programmers',
      author: [
        {
          name: 'Axel Rauschmayer'
        }
      ],
      published: '2014-02-01T00:00:00.000Z',
      publisher: 'O\'Reilly Media',
      categories: ['tag1', 'tag2'],
      rating: 1,
      picture: 'https://images-na.ssl-images-amazon.com/images/I/51+Ee6EuenL._SX376_BO1,204,203,200_.jpg',
      pages: 460,
      description: 'Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
      website: 'http://speakingjs.com/'
    };
    this.bookService.addBook(book);
  }

}
