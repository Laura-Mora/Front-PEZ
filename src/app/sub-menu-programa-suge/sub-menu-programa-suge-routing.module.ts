import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubMenuProgramaSugePage } from './sub-menu-programa-suge.page';

const routes: Routes = [
  {
    path: '',
    component: SubMenuProgramaSugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubMenuProgramaSugePageRoutingModule {}
