import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/@core/books/books';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: Book[], value: string, searchType: string): unknown {
    console.log(value);
    console.log(searchType);
    return books.filter((book) => {
      switch (searchType.toLowerCase()) {
        case 'search':
          return book.title.toLowerCase().includes(value.toLowerCase());
        case 'publisher':
          return book.publisher.toLowerCase().includes(value.toLowerCase());
      }

    });
  }

}
