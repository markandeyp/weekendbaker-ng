import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../types/control';

@Component({
  selector: 'wb-button',
  template: `<div class="form-group">
    <button type="submit" class="btn btn-primary" (click)="onClick()">
      {{ label }}
    </button>
  </div>`,
})
export class ButtonComponent implements Control {
  @Input()
  label?: string = '';

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  onClick() {
    this.click.emit();
  }
}
