import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaAsignaturasPage } from './busqueda-asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaAsignaturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaAsignaturasPageRoutingModule {}
