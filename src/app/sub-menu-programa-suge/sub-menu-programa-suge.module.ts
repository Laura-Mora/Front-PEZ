import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubMenuProgramaSugePageRoutingModule } from './sub-menu-programa-suge-routing.module';

import { SubMenuProgramaSugePage } from './sub-menu-programa-suge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubMenuProgramaSugePageRoutingModule
  ],
  declarations: [SubMenuProgramaSugePage]
})
export class SubMenuProgramaSugePageModule {}
