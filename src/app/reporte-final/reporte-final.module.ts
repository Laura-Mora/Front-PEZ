import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteFinalPageRoutingModule } from './reporte-final-routing.module';

import { ReporteFinalPage } from './reporte-final.page';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteFinalPageRoutingModule
  ],
  declarations: [ReporteFinalPage]
})
export class ReporteFinalPageModule {}
