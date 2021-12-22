import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFirstComponent } from './view-first/view-first.component';
import { DisplayFirstComponent } from './display-first/display-first.component';

const routes: Routes = [
  {
    path: 'viewfirst',
    component: ViewFirstComponent,
  },
  {
    path: 'displayfirst',
    component: DisplayFirstComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstRoutingModule {}
