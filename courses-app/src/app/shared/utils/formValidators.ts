import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const customEmailValidator  = (emailTemplate: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const isEmailValid = emailTemplate.test(control.value);
    return isEmailValid ? null : {forbiddenEmail: {value: control.value ?? 'empty string'}}  ;
  };
}
