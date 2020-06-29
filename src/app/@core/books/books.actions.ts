import { Action } from '@ngrx/store';
import { Book } from './books';

// We are defining the type of action
export const ADD_BOOK       = '[BOOK] Add';
export const REMOVE_BOOK    = '[BOOK] Remove';

/**
 * @description We are creating a class for add a book action with a constructor that allows us to pass in the payload.
 */
export class AddBook implements Action {
    readonly type = ADD_BOOK;

    constructor(public payload: Book) {}
}
/**
 * @description We are creating a class for remove a book action with a constructor that allows us to pass in the payload.
 */
export class RemoveBook implements Action {
    readonly type = REMOVE_BOOK;

    constructor(public payload: number) {}
}

// We are exporting all of our action classes
export type Actions = AddBook | RemoveBook;

