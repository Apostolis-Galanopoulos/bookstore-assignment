import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/@core/search/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bookstore-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private searchService: SearchService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    this.searchForm.controls.search.valueChanges.subscribe(value => {
      this.searchService.searchAbook(value);
    });
  }
}
