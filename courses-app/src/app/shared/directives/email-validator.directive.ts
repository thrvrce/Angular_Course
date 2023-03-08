import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { customEmailValidator } from '../utils/formValidators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  @Input('appEmailValidator') validEmailTemplate = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validEmailTemplate
      ? customEmailValidator(new RegExp(this.validEmailTemplate, 'i'))(control)
      : null;
  }
}
