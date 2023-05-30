import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaModalidad'
})
export class FiltroAsignaturaModalidadPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], idModalidad: number): Asignatura[] {
    
    if(idModalidad===0){
      return asignaturas;
    }
    return asignaturas.filter(asignatura => {
      return asignatura.modalidad?.id === idModalidad;
    });
  }

}
