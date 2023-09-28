import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasComunPage } from './asignaturas-comun.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasComunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasComunPageRoutingModule {}
