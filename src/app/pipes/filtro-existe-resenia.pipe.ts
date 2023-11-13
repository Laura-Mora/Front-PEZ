import { Pipe, PipeTransform } from '@angular/core';
import { Reporte } from '../Model/Reporte/reporte';

@Pipe({
  name: 'filtroExisteResenia'
})
export class FiltroExisteReseniaPipe implements PipeTransform {

  transform(resenias: Reporte[],existe:Boolean): Reporte[] {
    if (existe){
      return resenias.filter(resenia =>{
        Number(resenia.porcentaje_complejidad_alta) > 0 ||
        Number(resenia.porcentaje_complejidad_baja) > 0 ||
        Number(resenia.porcentaje_complejidad_media) > 0
      });
    }else{
      return resenias;
    }
  }

}
