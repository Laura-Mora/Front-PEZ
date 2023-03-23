import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrizarPageRoutingModule } from './parametrizar-routing.module';

import { ParametrizarPage } from './parametrizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrizarPageRoutingModule
  ],
  declarations: [ParametrizarPage]
})
export class ParametrizarPageModule {}
