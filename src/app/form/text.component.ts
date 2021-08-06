import { Component, Input } from '@angular/core';
import { Control } from '../types/control';
@Component({
  selector: 'wb-text',
  template: `<div class="form-group">
    <label [for]="id">{{ label }}</label>
    <input [id]="id" class="form-control" [value]="value" />
  </div>`,
})
export class TextComponent implements Control {
  @Input()
  id?: string = '';

  @Input()
  value?: string = '';

  @Input()
  label?: string = '';
}
