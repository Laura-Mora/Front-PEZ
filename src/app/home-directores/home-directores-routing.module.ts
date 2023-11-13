import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDirectoresPage } from './home-directores.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDirectoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDirectoresPageRoutingModule {}
