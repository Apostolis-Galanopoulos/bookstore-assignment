import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/@core/books/books';
import { BookState } from 'src/app/@core/books/books.state';
import { SearchService } from 'src/app/@core/search/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchBook } from 'src/app/@core/search/searchBook';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'bookstore-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  searchBook: SearchBook;
  books$: Observable<Book[]>;

  constructor(
    private store: Store<BookState>,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute) {
    this.books$ = this.store.select('book');
  }

  ngOnInit(): void {
    this.searchService.bookSearch$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((search) => {
      this.searchBook = search;
    });
  }

  routing(id: number) {
    const path = `/../../pages/book/${id}`;
    this.router.navigate([path], { relativeTo: this.route });
  }

  trackByFn(item: Book) {
    return item.id;
  }

  ngOnDestroy(): void {
    this.searchService.searchAbook('', 'search');
    this.destroyed$.complete();
  }

}
