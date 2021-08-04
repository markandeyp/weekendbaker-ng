import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../types/loginresponse';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private auth: AngularFireAuth) {}

  onSubmit() {
    if (this.form?.valid) {
      this.auth
        .signInWithEmailAndPassword(this.model.username, this.model.password)
        .then((authResponse) => {
          console.log(authResponse.user);
          this.loginResponse = {
            status: 'Success',
            token: authResponse.user?.email,
          };
          this.form?.resetForm();
        })
        .catch((err) => {
          console.log('Error during login', err);
          this.loginResponse = {
            status: 'Error',
            msg: err.message,
          };
          this.form?.resetForm();
        });
    }
  }
}
