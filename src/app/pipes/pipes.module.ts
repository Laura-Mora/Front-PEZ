import { NgModule } from '@angular/core';
import { FiltroAsignaturaPipe } from './filtro-asignatura.pipe';
import { FiltroAsignaturaModalidadPipe } from './filtro-asignatura-modalidad.pipe';
import { FiltroAsignaturaComplejidadPipe } from './filtro-asignatura-complejidad.pipe';


@NgModule({
  declarations: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe
  ],
  exports: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe
  ]
})
export class PipesModule { }
