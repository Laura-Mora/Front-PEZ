import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaltaProgramaPageRoutingModule } from './falta-programa-routing.module';

import { FaltaProgramaPage } from './falta-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaltaProgramaPageRoutingModule
  ],
  declarations: [FaltaProgramaPage]
})
export class FaltaProgramaPageModule {}
