import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaltaProgramaSugePageRoutingModule } from './falta-programa-suge-routing.module';

import { FaltaProgramaSugePage } from './falta-programa-suge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaltaProgramaSugePageRoutingModule
  ],
  declarations: [FaltaProgramaSugePage]
})
export class FaltaProgramaSugePageModule {}
