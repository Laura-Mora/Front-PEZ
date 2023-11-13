import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

import { FormPersoAsignPageRoutingModule } from './form-perso-asign-routing.module';

import { FormPersoAsignPage } from './form-perso-asign.page';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FormPersoAsignPageRoutingModule
  ],
  declarations: [FormPersoAsignPage]
})
export class FormPersoAsignPageModule {}
