import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvancePrograSugePage } from './avance-progra-suge.page';

const routes: Routes = [
  {
    path: '',
    component: AvancePrograSugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvancePrograSugePageRoutingModule {}
