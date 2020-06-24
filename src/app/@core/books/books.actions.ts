import { Action } from '@ngrx/store';
import { Book } from './books';

// Section 2
export const ADD_BOOK       = '[BOOK] Add';
export const REMOVE_BOOK    = '[BOOK] Remove';

// Section 3
export class AddBook implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
    readonly type = REMOVE_BOOK;

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddBook | RemoveBook;

