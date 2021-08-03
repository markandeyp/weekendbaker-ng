import { Component, Input } from '@angular/core';

@Component({
  selector: 'wb-toast',
  template: `<div class="alert alert-danger" role="alert" *ngIf="msg">
    {{ msg }}
  </div>`,
})
export class ToastComponent {
  @Input()
  msg: string = '';
}
