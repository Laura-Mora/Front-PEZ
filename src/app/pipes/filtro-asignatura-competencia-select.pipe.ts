import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaCompetenciaSelect'
})
export class FiltroAsignaturaCompetenciaSelectPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], texto: string): Asignatura[] {
    if(texto.length===0){
      return asignaturas;
    }

    return asignaturas.filter(asignatura =>{
      return asignatura.competencias.some(compe => compe.nombre === texto);
    });
  }

}
