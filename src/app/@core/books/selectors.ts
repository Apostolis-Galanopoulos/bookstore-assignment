import { createSelector } from '@ngrx/store';
import { BookState } from './books.state';
import { Book } from './books';

export const selectAllBooks = (state: BookState) => state.book;

export const selectBookById = createSelector(
    selectAllBooks,
    (allBooks: Book[], props: any) => {
        if (allBooks) {
            return allBooks.filter((book: Book) => book.id === props.id);
        } else {
            return {};
        }
    }
);
