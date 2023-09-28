import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturasComunPageRoutingModule } from './asignaturas-comun-routing.module';

import { AsignaturasComunPage } from './asignaturas-comun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturasComunPageRoutingModule
  ],
  declarations: [AsignaturasComunPage]
})
export class AsignaturasComunPageModule {}
