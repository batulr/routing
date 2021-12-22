import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { ViewFirstComponent } from './view-first/view-first.component';
import { DisplayFirstComponent } from './display-first/display-first.component';


@NgModule({
  declarations: [
    ViewFirstComponent,
    DisplayFirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
