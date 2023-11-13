import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeAvancePage } from './informe-avance.page';

const routes: Routes = [
  {
    path: '',
    component: InformeAvancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeAvancePageRoutingModule {}
