import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaltaProgramaPage } from './falta-programa.page';

const routes: Routes = [
  {
    path: '',
    component: FaltaProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaltaProgramaPageRoutingModule {}
