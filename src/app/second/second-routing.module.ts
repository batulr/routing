import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSecondComponent } from './view-second/view-second.component';
import { DisplaySecondComponent } from './display-second/display-second.component';

const routes: Routes = [
  {
    path: 'second',
    children: [
      {
        path: 'view',
        component: ViewSecondComponent,
      },
      {
        path: 'display',
        component: DisplaySecondComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondRoutingModule {}
