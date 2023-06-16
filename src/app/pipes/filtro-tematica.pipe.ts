import { Pipe, PipeTransform } from '@angular/core';
import { Tematica } from '../Model/Tematica/tematica';

@Pipe({
  name: 'filtroTematica'
})
export class FiltroTematicaPipe implements PipeTransform {

  transform(tematicas: Tematica[], texto: string): Tematica[] {
    if(texto.length===0){
      return tematicas;
    }
    texto = texto.toLowerCase();

    return tematicas.filter(tematica =>{
      return tematica.nombre.toLowerCase().includes(texto);
    } );
  }

}
