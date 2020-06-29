import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Book } from 'src/app/@core/books/books';
import { Store } from '@ngrx/store';
import { BookState } from 'src/app/@core/books/books.state';
import { SearchService } from 'src/app/@core/search/search.service';

@Component({
  selector: 'bookstore-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFilterComponent implements OnInit {

  booksList: Book[];
  publisherForm: FormGroup;
  AllPublisher: string = 'All Publisher';

  constructor(private formBuilder: FormBuilder, private store: Store<BookState>, private searchService: SearchService, ) {
    this.store.select('book').subscribe((books: Book[]) => {
      this.booksList = books;
    });
  }

  ngOnInit(): void {
    this.publisherForm = this.formBuilder.group({
      books: this.formBuilder.array([]),
      publisher: new FormControl()
    });
    this.publisher();

    this.publisherForm.get('publisher').valueChanges.subscribe(value => {
      let searchValue = value;
      this.AllPublisher === value ? searchValue = '' : value;
      this.searchService.searchAbook(searchValue, 'publisher')
    })
  }
  /**
   * @description 
   */
  private publisher() {
    const uniqueSet = new Set();
    uniqueSet.add(this.AllPublisher);
    const books: FormArray = this.publisherForm.get('books') as FormArray;
    this.booksList.forEach((item: Book) => {
      uniqueSet.add(item.publisher);
    })
    uniqueSet.forEach((o) => {
      const control = new FormControl(o);
      books.push(control);
    });
  }

  get books(): FormArray {
    return this.publisherForm.get('books') as FormArray;
  }

}
