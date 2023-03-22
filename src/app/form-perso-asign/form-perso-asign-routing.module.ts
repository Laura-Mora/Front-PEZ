import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPersoAsignPage } from './form-perso-asign.page';

const routes: Routes = [
  {
    path: '',
    component: FormPersoAsignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPersoAsignPageRoutingModule {}
