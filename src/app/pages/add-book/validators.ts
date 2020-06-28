import { AbstractControl } from '@angular/forms';

export class ValidatorsCustom {
    /**
 * @description check if the first of the description letter is capitalized.
 */
    static isUpperCase(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^[A-Z]');
            return regexp.test(control.value) ? null : { 'custom': { value: 'The first letter must be capitalized' } };
        }
        return null;
    }
    /**
     * @description
     */
    static isbnTenValid(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^(?=(?:\\D*\\d){10}?$)[\\d-]+$');
            return regexp.test(control.value) ? null : { 'custom': { value: 'ISBN-10 must be valid' } };
        }
        return null;
    }
    /**
     * @description
     */
    static isbnThirteenValid(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^(?=(?:\\D*\\d){13}?$)[\\d-]+$');
            return regexp.test(control.value) ? null : { 'custom': { value: 'ISBN-13 must be valid' } };
        }
        return null;
    }
    /**
     * @description
     */
    static ratingValid(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^[0-9]');
            return regexp.test(control.value) ? null : { 'custom': { value: 'The Rating must be min 0 max 5' } };
        }
        return null;
    }
    /**
     * @description
     */
    static titleValid(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^[a-zA-Z 0-9\@\"\#\&\*\!]*$');
            return regexp.test(control.value) ? null : { 'custom': { value: 'Allow the following special characters: @”#&*!' } };
        }
        return null;
    }
    /**
     * @description
     */
    static yearValid(control: AbstractControl): { [key: string]: any } | null {
        if (control.dirty && control.value) {
            const regexp = RegExp('^[0-9]{4}$');
            return regexp.test(control.value) ? null : { 'custom': { value: 'The year must be 4 digit' } };
        }
        return null;
    }
}