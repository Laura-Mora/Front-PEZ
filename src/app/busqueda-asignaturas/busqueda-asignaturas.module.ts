import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaAsignaturasPageRoutingModule } from './busqueda-asignaturas-routing.module';

import { BusquedaAsignaturasPage } from './busqueda-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaAsignaturasPageRoutingModule
  ],
  declarations: [BusquedaAsignaturasPage]
})
export class BusquedaAsignaturasPageModule {}
