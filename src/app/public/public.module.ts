import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports : [    
  ]
})
export class PublicModule { }
