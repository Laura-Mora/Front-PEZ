import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPersoAsignPageRoutingModule } from './form-perso-asign-routing.module';

import { FormPersoAsignPage } from './form-perso-asign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPersoAsignPageRoutingModule
  ],
  declarations: [FormPersoAsignPage]
})
export class FormPersoAsignPageModule {}
