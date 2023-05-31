import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaModo'
})
export class FiltroAsignaturaModoPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], idModo: number): Asignatura[] {
    
    if(idModo===0){
      return asignaturas;
    }
    return asignaturas.filter(asignatura => {
      return asignatura.modoEnsenianza.id === idModo;
    });
  }

}
