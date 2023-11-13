import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvancePrograSugePageRoutingModule } from './avance-progra-suge-routing.module';

import { AvancePrograSugePage } from './avance-progra-suge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvancePrograSugePageRoutingModule
  ],
  declarations: [AvancePrograSugePage]
})
export class AvancePrograSugePageModule {}
