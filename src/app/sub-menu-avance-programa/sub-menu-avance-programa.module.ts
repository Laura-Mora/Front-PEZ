import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubMenuAvanceProgramaPageRoutingModule } from './sub-menu-avance-programa-routing.module';

import { SubMenuAvanceProgramaPage } from './sub-menu-avance-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubMenuAvanceProgramaPageRoutingModule
  ],
  declarations: [SubMenuAvanceProgramaPage]
})
export class SubMenuAvanceProgramaPageModule {}
