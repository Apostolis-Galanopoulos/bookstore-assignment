import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { BooksService } from 'src/app/@core/books/books.service';
import { Book } from 'src/app/@core/books/books';

@Component({
  selector: 'bookstore-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {

  MAX_AUTHOR: number = 3;
  MAX_CATEGORIES: number = 4;
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
            Validators.required,
            Validators.maxLength(512),
          ],
          updateOn: 'change'
        }
      ],
      year: [
        null,
        {
          validators: [
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
    this.bookForm.get("description").valueChanges.subscribe(x => {
      console.log('description');
      console.log(x.length);
      console.log(x.charAt(0));
   })
  }

  get authorNames(): FormArray {
    return this.bookForm.get('authorNames') as FormArray;
  }

  get categories(): FormArray {
    return this.bookForm.get('categories') as FormArray;
  }

  removeAuthor(index: number) {
    console.log(index);
    const authorNames: FormArray = this.bookForm.get('authorNames') as FormArray;
    if (index > 0) {
      authorNames.removeAt(index);
    }
  }
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

  removeCategory(index: number) {
    console.log(index);
    const categories: FormArray = this.bookForm.get('categories') as FormArray;
    if (index > 0) {
      categories.removeAt(index);
    }
  }
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

  onFormSubmit(event: any): void {
    if(this.bookForm.valid) {
      console.log(this.bookForm.value);
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
      this.bookService.addBook(book);
    }
  }

  isUpperCase(nameRe: RegExp): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

}
