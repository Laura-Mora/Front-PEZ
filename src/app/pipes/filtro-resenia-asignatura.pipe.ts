import { Pipe, PipeTransform } from '@angular/core';
import { Resenia } from '../Model/Resenia/resenia';
import { Reporte } from '../Model/Reporte/reporte';

@Pipe({
  name: 'filtroReseniaAsignatura'
})
export class FiltroReseniaAsignaturaPipe implements PipeTransform {

  transform(resenias: Reporte[], texto: string): Reporte[] {
    if(texto.length===0){
      return resenias;
    }

    return resenias.filter(resenia =>{
      return resenia.nombre_asignatura.toLowerCase().includes(texto);
    });
  }

}
