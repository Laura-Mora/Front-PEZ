import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDirectoresPageRoutingModule } from './home-directores-routing.module';

import { HomeDirectoresPage } from './home-directores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDirectoresPageRoutingModule
  ],
  declarations: [HomeDirectoresPage]
})
export class HomeDirectoresPageModule {}
