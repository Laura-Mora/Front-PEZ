import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Pipe({
  name: 'filtroAsignaturaTematicaTexto'
})
export class FiltroAsignaturaTematicaTextoPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], texto: string): Asignatura[] {
    if(texto.length===0){
      return asignaturas;
    }
    texto = texto.toLowerCase();

    return asignaturas.filter(asignatura =>{
      return asignatura.tematicas.some(tema => tema.nombre.toLowerCase().includes(texto));
    } );
  }

}
