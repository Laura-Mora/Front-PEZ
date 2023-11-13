import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteFinalPage } from './reporte-final.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteFinalPageRoutingModule {}
