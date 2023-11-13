import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaltaProgramaSugePage } from './falta-programa-suge.page';

const routes: Routes = [
  {
    path: '',
    component: FaltaProgramaSugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaltaProgramaSugePageRoutingModule {}
