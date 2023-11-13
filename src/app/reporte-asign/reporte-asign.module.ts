import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteAsignPageRoutingModule } from './reporte-asign-routing.module';

import { ReporteAsignPage } from './reporte-asign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteAsignPageRoutingModule
  ],
  declarations: [ReporteAsignPage]
})
export class ReporteAsignPageModule {}
