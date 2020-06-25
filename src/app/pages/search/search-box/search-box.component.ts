import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/@core/search/search.service';

@Component({
  selector: 'bookstore-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  private values = '';

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.values = event.target.value;
    this.searchService.searchAbook(this.values);
  }
}
