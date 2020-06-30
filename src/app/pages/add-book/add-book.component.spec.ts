import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { BooksService } from 'src/app/@core/books/books.service';
import { Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BooksService, Store, StateObservable, ActionsSubject, ReducerManager, InjectionToken, ReducerManagerDispatcher],
      declarations: [ AddBookComponent ],
      imports: [ReactiveFormsModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
