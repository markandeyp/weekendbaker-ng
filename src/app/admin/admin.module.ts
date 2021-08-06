import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WBAdminRoutingModule } from './admin.routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, WBAdminRoutingModule],
  exports: [],
})
export class AdminModule {}
