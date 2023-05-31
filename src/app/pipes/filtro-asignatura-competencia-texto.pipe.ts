import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaCompetenciaTexto'
})
export class FiltroAsignaturaCompetenciaTextoPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], texto: string): Asignatura[] {
    if(texto.length===0){
      return asignaturas;
    }
    texto = texto.toLowerCase();

    return asignaturas.filter(asignatura =>{
      return asignatura.competencias.some(compe => compe.nombre.toLowerCase().includes(texto));
    } );
  }

}
