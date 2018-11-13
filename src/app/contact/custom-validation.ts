import { FormGroup, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/**
 * Custom validator functions for reactive form validation
 */
  export class CustomValidators {
  /**
   * Validates that child controls in the form group are equal
   */
  static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
    return isValid ? null : { childrenNotEqual: true };
  }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.parent.invalid && control.touched;
  }
}

/**
 * Collection of reusable RegExps
 */
export const regExps: { [key: string]: RegExp } = {
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
};

/**
 * Collection of reusable error messages
 */
export const errorMessages: { [key: string]: string } = {
  firstName: 'First name is required and must be between 1 and 30 characters.',
  lastName: 'Last name is required and must be between 1 and 30 characters.',
  emailAddress: 'Email is required and must be a valid e-mail address (username@domain)',
  subject: 'Subject is required and must be between 1 and 80 characters.',
  message: 'Message is required and must be between 1 and 300 characters.',
  captcha: 'The CAPTCHA verification failed. Please try again.'
};
