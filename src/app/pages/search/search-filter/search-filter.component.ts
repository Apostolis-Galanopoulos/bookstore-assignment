import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/@core/search/search.service';
import { Sort } from 'src/app/@core/search/sort';

@Component({
  selector: 'bookstore-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  sortList: Sort[] = [];

  ngOnInit(): void {
    this.searchService.getBookFilter().subscribe((sort: Sort[]) => {
      this.sortList = sort;
    });
  }

}
