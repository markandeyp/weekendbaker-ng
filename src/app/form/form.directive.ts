import {
  ComponentFactoryResolver,
  Directive,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Control } from '../types/control';
import { ButtonComponent } from './button.component';
import { FormComponent } from './form.component';
import { PasswordComponent } from './password.component';
import { RadioComponent } from './radio.component';
import { TextComponent } from './text.component';

@Directive({
  selector: '[wb-form]',
})
export class FormDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private host: FormComponent,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    if (this.host.formData) {
      this.host.formData.forEach((element) => {
        switch (element.name) {
          case 'text':
            this.createTextComponent(element);
            break;
          case 'password':
            this.createPasswordComponent(element);
            break;
          case 'radio':
            this.createRadioComponent(element);
            break;
          case 'button':
            this.createButtonComponent(element);
            break;
        }
      });
    }
  }

  createTextComponent(element: Control) {
    let component =
      this.componentFactory.resolveComponentFactory(TextComponent);
    let textBox = this.viewContainerRef.createComponent<Control>(component);
    textBox.instance.id = element.id;
    textBox.instance.label = element.label;
  }

  createPasswordComponent(element: Control) {
    let component =
      this.componentFactory.resolveComponentFactory(PasswordComponent);
    let textBox = this.viewContainerRef.createComponent(component);
    textBox.instance.id = element.id;
    textBox.instance.label = element.label;
  }

  createRadioComponent(element: Control) {
    let component =
      this.componentFactory.resolveComponentFactory(RadioComponent);
    let textBox = this.viewContainerRef.createComponent(component);
    textBox.instance.id = element.id;
    textBox.instance.label = element.label;
  }

  createButtonComponent(element: Control) {
    let component =
      this.componentFactory.resolveComponentFactory(ButtonComponent);
    let textBox = this.viewContainerRef.createComponent(component);
    textBox.instance.label = element.label;
    textBox.instance.click.subscribe(() => {
      this.host.onSubmit();
    });
  }
}
