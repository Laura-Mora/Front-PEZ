import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaComplejidad'
})
export class FiltroAsignaturaComplejidadPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], complejidad: string): Asignatura[] {
    if(complejidad.length===0){
      return asignaturas;
    }
    complejidad = complejidad.toLowerCase();

    return asignaturas.filter(asignatura =>{
      return asignatura.complejidad.toLowerCase().includes(complejidad);
    } );
  }

}
