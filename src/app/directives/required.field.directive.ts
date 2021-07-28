import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[wb-required]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RequiredFieldDirective,
      multi: true,
    },
  ],
})
export class RequiredFieldDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return {
        required: 'Field is required',
      };
    } else if (control.value.toLowerCase() === 'test') {
      return {
        invalidUsername: 'Name can not be test',
      };
    } else {
      return null;
    }
  }
}
