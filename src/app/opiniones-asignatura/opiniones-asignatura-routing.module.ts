import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpinionesAsignaturaPage } from './opiniones-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: OpinionesAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpinionesAsignaturaPageRoutingModule {}
