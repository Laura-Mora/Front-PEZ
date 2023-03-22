import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosAsignaturaPageRoutingModule } from './datos-asignatura-routing.module';

import { DatosAsignaturaPage } from './datos-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosAsignaturaPageRoutingModule
  ],
  declarations: [DatosAsignaturaPage]
})
export class DatosAsignaturaPageModule {}
