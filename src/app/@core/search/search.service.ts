import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchBook } from './searchBook';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private bookSearch = new BehaviorSubject<SearchBook>({ value: '', key: 'search' });
  public bookSearch$ = this.bookSearch.asObservable();

  searchAbook(search: string, searchType: string): void {
    this.bookSearch.next({ value: search, key: searchType });
  }
}
