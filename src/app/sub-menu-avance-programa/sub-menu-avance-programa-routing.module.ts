import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubMenuAvanceProgramaPage } from './sub-menu-avance-programa.page';

const routes: Routes = [
  {
    path: '',
    component: SubMenuAvanceProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubMenuAvanceProgramaPageRoutingModule {}
