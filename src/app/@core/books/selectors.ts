import { createSelector } from '@ngrx/store';
import { BookState } from './books.state';
import { Book } from './books';

export const selectAllBooks = (state: BookState) => state.book;

export interface SelectBook {
    id: number;
}

export const selectBookById = createSelector(
    selectAllBooks,
    (allBooks: Book[], props: SelectBook) => {
        if (allBooks) {
            return allBooks.filter((book: Book) => book.id === props.id);
        } else {
            return {};
        }
    }
);

export const total = createSelector(
    selectAllBooks,
    (allBooks: Book[]) => {
        if (allBooks) {
            return allBooks.length;
        }
    }
);
