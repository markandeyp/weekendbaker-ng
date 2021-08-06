import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequiredFieldDirective } from '../directives/required.field.directive';
import { ButtonComponent } from '../form/button.component';
import { FormComponent } from '../form/form.component';
import { FormDirective } from '../form/form.directive';
import { PasswordComponent } from '../form/password.component';
import { RadioComponent } from '../form/radio.component';
import { TextComponent } from '../form/text.component';
import { NamePipe } from '../pipes/name.pipe';
import { PriceFilter } from '../pipes/pricefilter.pipe';

@NgModule({
  declarations: [
    FormComponent,
    FormDirective,
    TextComponent,
    PasswordComponent,
    RadioComponent,
    ButtonComponent,
    NamePipe,
    PriceFilter,
    RequiredFieldDirective,
  ],
  imports: [FormsModule],
  exports: [
    FormsModule,
    FormComponent,
    FormDirective,
    TextComponent,
    PasswordComponent,
    RadioComponent,
    ButtonComponent,
    NamePipe,
    PriceFilter,
    RequiredFieldDirective,
  ],
})
export class SharedModule {}
