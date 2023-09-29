import { NgModule } from '@angular/core';
import { FiltroAsignaturaPipe } from './filtro-asignatura.pipe';
import { FiltroAsignaturaModalidadPipe } from './filtro-asignatura-modalidad.pipe';
import { FiltroAsignaturaComplejidadPipe } from './filtro-asignatura-complejidad.pipe';
import { FiltroAsignaturaTematicaSelectPipe } from './filtro-asignatura-tematica-select.pipe';
import { FiltroAsignaturaCompetenciaSelectPipe } from './filtro-asignatura-competencia-select.pipe';
import { FiltroAsignaturaModoPipe } from './filtro-asignatura-modo.pipe';
import { FiltroAsignaturaTematicaTextoPipe } from './filtro-asignatura-tematica-texto.pipe';
import { FiltroAsignaturaCompetenciaTextoPipe } from './filtro-asignatura-competencia-texto.pipe';
import { FiltroTematicaPipe } from './filtro-tematica.pipe';
import { FiltroCompetenciasPipe } from './filtro-competencias.pipe';
import { FiltroActividadesPipe } from './filtro-actividades.pipe';
import { FiltroReseniaAsignaturaPipe } from './filtro-resenia-asignatura.pipe';
import { FiltroExisteReseniaPipe } from './filtro-existe-resenia.pipe';


@NgModule({
  declarations: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe,
    FiltroAsignaturaTematicaSelectPipe,
    FiltroAsignaturaCompetenciaSelectPipe,
    FiltroAsignaturaModoPipe,
    FiltroAsignaturaTematicaTextoPipe,
    FiltroAsignaturaCompetenciaTextoPipe,
    FiltroTematicaPipe,
    FiltroCompetenciasPipe,
    FiltroActividadesPipe,
    FiltroReseniaAsignaturaPipe,
    FiltroExisteReseniaPipe
  ],
  exports: [
    FiltroAsignaturaPipe,
    FiltroAsignaturaModalidadPipe,
    FiltroAsignaturaComplejidadPipe,
    FiltroAsignaturaTematicaSelectPipe,
    FiltroAsignaturaCompetenciaSelectPipe,
    FiltroAsignaturaModoPipe,
    FiltroAsignaturaTematicaTextoPipe,
    FiltroAsignaturaCompetenciaTextoPipe,
    FiltroTematicaPipe,
    FiltroCompetenciasPipe,
    FiltroActividadesPipe,
    FiltroReseniaAsignaturaPipe,
    FiltroExisteReseniaPipe
  ]
})
export class PipesModule { }
