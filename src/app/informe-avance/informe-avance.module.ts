import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeAvancePageRoutingModule } from './informe-avance-routing.module';

import { InformeAvancePage } from './informe-avance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeAvancePageRoutingModule
  ],
  declarations: [InformeAvancePage]
})
export class InformeAvancePageModule {}
