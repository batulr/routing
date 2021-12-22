import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { ViewSecondComponent } from './view-second/view-second.component';
import { DisplaySecondComponent } from './display-second/display-second.component';


@NgModule({
  declarations: [
    ViewSecondComponent,
    DisplaySecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
