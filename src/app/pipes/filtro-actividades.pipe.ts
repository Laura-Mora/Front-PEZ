import { Pipe, PipeTransform } from '@angular/core';
import { Actividad } from '../Model/Actividad/actividad';

@Pipe({
  name: 'filtroActividades'
})
export class FiltroActividadesPipe implements PipeTransform {

  transform(actividades: Actividad[], texto: string): Actividad[] {
    if(texto.length===0){
      return actividades;
    }
    texto = texto.toLowerCase();

    return actividades.filter(actividad =>{
      return actividad.nombre.toLowerCase().includes(texto);
    } );
  }

}
