import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SugeAsignaturasPageRoutingModule } from './suge-asignaturas-routing.module';

import { SugeAsignaturasPage } from './suge-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SugeAsignaturasPageRoutingModule
  ],
  declarations: [SugeAsignaturasPage]
})
export class SugeAsignaturasPageModule {}
