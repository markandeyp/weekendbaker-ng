import { Component } from '@angular/core';
import { Control } from '../types/control';

@Component({
  selector: 'wb-form',
  template: `<form style="width: 500px; margin: 0 auto;">
    <ng-template wb-form></ng-template>
  </form>`,
})
export class FormComponent {
  formData: Control[] = [
    {
      id: 'username',
      name: 'text',
      label: 'Enter Username',
      value: '',
    },
    {
      id: 'password',
      name: 'password',
      label: 'Enter Password',
      value: '',
    },
    {
      id: 'repassword',
      name: 'password',
      label: 'Confirm Password',
      value: '',
    },
    {
      id: 'employee',
      name: 'radio',
      label: 'Are you employee',
      value: 'true',
    },
    {
      label: 'Signup',
      name: 'button',
    },
  ];

  onSubmit() {
    console.log('Form is being submitted now');
  }
}
