import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { customEmailValidator } from '../../utils/formValidators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, customEmailValidator(/^[A-Za-z0-9]{1,}\.[a-z]{2,3}$/i)]],
      password: ['', [Validators.required]],
    });
  }

  get name() {
    return this.registrationForm.get('name')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get password() {
    return this.registrationForm.get('password')
  }

}
