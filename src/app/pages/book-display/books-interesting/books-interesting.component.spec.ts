import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksInterestingComponent } from './books-interesting.component';

describe('BooksInterestingComponent', () => {
  let component: BooksInterestingComponent;
  let fixture: ComponentFixture<BooksInterestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksInterestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksInterestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
