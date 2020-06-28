import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { BooksService } from 'src/app/@core/books/books.service';
import { Book } from 'src/app/@core/books/books';
import { ValidatorsCustom } from './validators';

@Component({
  selector: 'bookstore-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {

  MAX_AUTHOR = 3;
  MAX_CATEGORIES = 4;
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
      categories: this.formBuilder.array([
        new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
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
            ValidatorsCustom.titleValid
          ],
          updateOn: 'change'
        }
      ],
      subtitle: [
        null,
        {
          validators: [
            Validators.maxLength(240),
          ],
          updateOn: 'change'
        }
      ],
      description: [
        null,
        {
          validators: [
            Validators.required,
            Validators.maxLength(512),
            ValidatorsCustom.isUpperCase,
          ],
          updateOn: 'change'
        }
      ],
      year: [
        null,
        {
          validators: [
            Validators.required,
            ValidatorsCustom.yearValid
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
            Validators.max(9999),
            Validators.min(1),
          ],
          updateOn: 'change'
        }
      ],
      rating: [
        null,
        {
          validators: [
            Validators.required,
            Validators.max(5),
            Validators.min(0),
            ValidatorsCustom.ratingValid
          ],
          updateOn: 'change'
        }
      ],
      isbnTen: [
        null,
        {
          validators: [
            Validators.required,
            ValidatorsCustom.isbnTenValid
          ],
          updateOn: 'change'
        }
      ],
      isbnThirteen: [
        null,
        {
          validators: [
            Validators.required,
            ValidatorsCustom.isbnThirteenValid
          ],
          updateOn: 'change'
        }
      ],
    });
  }

  get authorNames(): FormArray {
    return this.bookForm.get('authorNames') as FormArray;
  }

  get categories(): FormArray {
    return this.bookForm.get('categories') as FormArray;
  }
  /**
   * @description remove the author from the list by index
   */
  removeAuthor(index: number) {
    console.log(index);
    const authorNames: FormArray = this.bookForm.get('authorNames') as FormArray;
    if (index > 0) {
      authorNames.removeAt(index);
    }
  }
  /**
   * @description add a new author
   */
  addAuthor() {
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
  /**
   * @description remove the category from the list by index
   */
  removeCategory(index: number) {
    console.log(index);
    const categories: FormArray = this.bookForm.get('categories') as FormArray;
    if (index > 0) {
      categories.removeAt(index);
    }
  }
  /**
   * @description add a new category
   */
  addCategory() {
    const categories: FormArray = this.bookForm.get('categories') as FormArray;
    if (categories.length <= this.MAX_CATEGORIES) {
      categories.push(new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
        ],
        updateOn: 'change'
      }));
    }
  }
  /**
   *
   * @description
   */
  onFormSubmit(event: any): void {
    console.log(this.bookForm);
    if (this.bookForm.valid) {
      const book: Book = {
        isbnTen: this.bookForm.value.isbnTen,
        isbnThirteen: this.bookForm.value.isbnThirteen,
        title: this.bookForm.value.title,
        subtitle: this.bookForm.value.subtitle,
        author: this.bookForm.value.authorNames,
        published: this.bookForm.value.year,
        publisher: this.bookForm.value.publisher,
        categories: this.bookForm.value.categories,
        rating: this.bookForm.value.rating,
        picture: 'https://images-na.ssl-images-amazon.com/images/I/51+Ee6EuenL._SX376_BO1,204,203,200_.jpg',
        pages: this.bookForm.value.pageNumber,
        description: this.bookForm.value.description,
        website: 'http://speakingjs.com/'
      };
      // add the book in store
      this.bookService.addBook(book);

      this.bookForm.reset();
    }
  }
}
