import { NgModule } from '@angular/core';
import { FiltroAsignaturaPipe } from './filtro-asignatura.pipe';


@NgModule({
  declarations: [
    FiltroAsignaturaPipe
  ],
  exports: [
    FiltroAsignaturaPipe
  ]
})
export class PipesModule { }
