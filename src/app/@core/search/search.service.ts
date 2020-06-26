import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Sort } from './sort';
import { SORT } from './sort.mock';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  search = '';
  private bookSearch = new BehaviorSubject<string>(this.search);
  public bookSearch$ = this.bookSearch.asObservable();

  searchAbook(search: string): void {
    this.bookSearch.next(search);
  }

  getBookFilter(): Observable<Sort[]> {
    return of(SORT);
  }
}
