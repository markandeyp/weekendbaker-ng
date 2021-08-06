import { Component, Input } from '@angular/core';
import { Control } from '../types/control';

@Component({
  selector: 'wb-password',
  template: `<div class="form-group">
    <label [for]="id">{{ label }}</label>
    <input [id]="id" type="password" class="form-control" [value]="value" />
  </div>`,
})
export class PasswordComponent implements Control {
  @Input()
  id?: string = '';

  @Input()
  value?: string = '';

  @Input()
  label?: string = '';
}
