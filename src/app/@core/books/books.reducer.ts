import { Action } from '@ngrx/store';
import { Book } from './books';
import * as BookActions from './books.actions';

// Section 1
const initialState: Book = {
    isbnTen: 9781449331818,
    isbnThirteen: 9781449331818,
    title: 'Learning JavaScript Design Patterns',
    subtitle: 'A JavaScript and jQuery Developer\'s Guide',
    author: 'Addy Osmani',
    published: '2012-07-01T00:00:00.000Z',
    publisher: 'O\'Reilly Media',
    pages: 254,
    description: 'With Learning JavaScript Design Patterns, you\'ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.',
    website: 'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/'
};

// Section 2
export function reducer(state: Book[] = [initialState], action: BookActions.Actions) {

    // Section 3
    switch (action.type) {
        case BookActions.ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
}
