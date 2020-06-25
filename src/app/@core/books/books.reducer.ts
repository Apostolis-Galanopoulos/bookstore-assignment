import { Book } from './books';
import * as BookActions from './books.actions';

/**
 *
 * @description We handle all actions about the books, and a book, remove a book.
 */
export function reducer(state: Book[] = [], action: BookActions.Actions) {

    switch (action.type) {
        // add a book to store
        case BookActions.ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
}
