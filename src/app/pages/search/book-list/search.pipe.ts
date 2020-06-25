import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/@core/books/books';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: Book[], value: string): unknown {
    console.log(value);
    return books.filter((book) => {
     return book.title.toLowerCase().includes(value.toLowerCase())
    });
  }

}
