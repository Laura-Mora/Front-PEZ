import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteAsignPage } from './reporte-asign.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteAsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteAsignPageRoutingModule {}
