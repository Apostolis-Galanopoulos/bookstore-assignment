import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  search: string = '';
  private bookSearch = new BehaviorSubject<string>(this.search);
  public bookSearch$ = this.bookSearch.asObservable();

  searchAbook(search: string): void {
    this.bookSearch.next(search);
  }
}
