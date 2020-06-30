import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;
  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.book = {
      id: 1,
      isbnTen: 9781593275846,
      isbnThirteen: 9781449331818,
      title: 'Eloquent JavaScript, Second Edition',
      subtitle: 'A Modern Introduction to Programming',
      author: ['Marijn Haverbeke'],
      published: '2014-12-14T00:00:00.000Z',
      categories: ['tag1', 'tag2'],
      rating: 1,
      publisher: 'No Starch Press',
      pages: 472,
      picture: 'https://eloquentjavascript.net/2nd_edition/img/cover.png',
      description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
      website: 'http://eloquentjavascript.net/'
    };
    fixture.detectChanges();
  });

  it('should be checked title property', () => {
    expect(fixture.nativeElement.querySelector('h3').innerText).toBe('Eloquent JavaScript, Second Edition');
  });
  it('should be checked picture property', () => {
    expect(fixture.nativeElement.querySelector('img').src).toContain('https://eloquentjavascript.net/2nd_edition/img/cover.png');
  });
});
