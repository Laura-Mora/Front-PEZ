import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionesAsignaturaPageRoutingModule } from './opiniones-asignatura-routing.module';

import { OpinionesAsignaturaPage } from './opiniones-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionesAsignaturaPageRoutingModule
  ],
  declarations: [OpinionesAsignaturaPage]
})
export class OpinionesAsignaturaPageModule {}
