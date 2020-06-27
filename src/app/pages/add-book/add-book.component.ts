import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BooksService } from 'src/app/@core/books/books.service';
import { Book } from 'src/app/@core/books/books';

@Component({
  selector: 'bookstore-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  MAX_AUTHOR: number = 3;
  bookForm: FormGroup;

  bookFileds: FormArray;

  constructor(private bookService: BooksService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      authorNames: this.formBuilder.array([
        new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(5),
          ],
          updateOn: 'change'
        })
      ]),
      title: [
        null,
        {
          validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(120),
            Validators.pattern('^[a-zA-Z 0-9\@\"\#\&\*\!]*$')
          ],
          updateOn: 'change'
        }
      ],
      subtitle: [
        null,
        {
          validators: [
          ],
          updateOn: 'change'
        }
      ],
      description: [
        null,
        {
          validators: [
          ],
          updateOn: 'change'
        }
      ],
      year: [
        null,
        {
          validators: [
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern('^[0-9]{4}')
          ],
          updateOn: 'change'
        }
      ],
      publisher: [
        null,
        {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(60),
          ],
          updateOn: 'change'
        }
      ],
      pageNumber: [
        null,
        {
          validators: [
            Validators.required,
            Validators.max(999),
            Validators.min(1),
          ],
          updateOn: 'change'
        }
      ],
      rating: [
        null,
        {
          validators: [
            Validators.max(5),
            Validators.min(0),
            Validators.pattern('^[0-9]')
          ],
          updateOn: 'change'
        }
      ],
      isbnTen: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern('^(?=(?:\\D*\\d){10}?$)[\\d-]+$')
          ],
          updateOn: 'change'
        }
      ],
      isbnThirteen: [
        null,
        {
          validators: [
            Validators.required,
            Validators.pattern('^(?=(?:\\D*\\d){13}?$)[\\d-]+$')
          ],
          updateOn: 'change'
        }
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

  get authorNames(): FormArray {
    return this.bookForm.get('authorNames') as FormArray;
  }

  removeAuthor(index: number) {
    const authorNames: FormArray = this.bookForm.get('authorNames') as FormArray;
    if (index > 0) {
      authorNames.removeAt(index);
    }
  }
  AddAuthor() {
    const authorNames: FormArray = this.bookForm.get('authorNames') as FormArray;
    if (authorNames.length <= this.MAX_AUTHOR) {
      authorNames.push(new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
        ],
        updateOn: 'change'
      }));
    }
  }

  onFormSubmit(event: any): void {
    console.log(this.bookForm);
  }

}
