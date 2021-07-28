import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  AbstractControl,
  NgForm,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { LoginResponse } from '../types/loginresponse';

@Component({
  selector: 'wb-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild(NgForm)
  form?: NgForm;

  model: { username: string; password: string } = {
    username: '',
    password: '',
  };

  loginResponse?: LoginResponse;

  constructor(private service: UserService) {}

  onSubmit() {
    if (this.form?.valid) {
      this.service.login(this.model).subscribe(
        (res) => {
          this.form?.resetForm();
          this.loginResponse = res;
          if (this.loginResponse.token) {
            this.model = { username: '', password: '' };
          }
        },
        (err) => console.log('Error during login', err)
      );
    }
  }
}
