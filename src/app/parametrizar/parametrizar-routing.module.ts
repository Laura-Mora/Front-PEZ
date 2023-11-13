import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrizarPage } from './parametrizar.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrizarPageRoutingModule {}
