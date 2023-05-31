import { NgModule } from '@angular/core';
import { FiltroAsignaturaPipe } from './filtro-asignatura.pipe';
import { FiltroAsignaturaModalidadPipe } from './filtro-asignatura-modalidad.pipe';
import { FiltroAsignaturaComplejidadPipe } from './filtro-asignatura-complejidad.pipe';
import { FiltroAsignaturaTematicaSelectPipe } from './filtro-asignatura-tematica-select.pipe';
import { FiltroAsignaturaCompetenciaSelectPipe } from './filtro-asignatura-competencia-select.pipe';
import { FiltroAsignaturaModoPipe } from './filtro-asignatura-modo.pipe';
import { FiltroAsignaturaTematicaTextoPipe } from './filtro-asignatura-tematica-texto.pipe';
import { FiltroAsignaturaCompetenciaTextoPipe } from './filtro-asignatura-competencia-texto.pipe';


@NgModule({
  declarations: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe,
    FiltroAsignaturaTematicaSelectPipe,
    FiltroAsignaturaCompetenciaSelectPipe,
    FiltroAsignaturaModoPipe,
    FiltroAsignaturaTematicaTextoPipe,
    FiltroAsignaturaCompetenciaTextoPipe
  ],
  exports: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe,
    FiltroAsignaturaTematicaSelectPipe,
    FiltroAsignaturaCompetenciaSelectPipe,
    FiltroAsignaturaModoPipe,
    FiltroAsignaturaTematicaTextoPipe,
    FiltroAsignaturaCompetenciaTextoPipe
  ]
})
export class PipesModule { }
