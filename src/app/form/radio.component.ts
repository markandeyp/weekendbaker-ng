import { Component, Input } from '@angular/core';
import { Control } from '../types/control';

@Component({
  selector: 'wb-radio',
  template: `<div class="form-check">
    <input
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      [id]="id"
    />
    <label class="form-check-label" [for]="id">
      {{ label }}
    </label>
  </div>`,
})
export class RadioComponent implements Control {
  @Input()
  id?: string = '';

  @Input()
  value?: string = '';

  @Input()
  label?: string = '';
}
