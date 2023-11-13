import { Pipe, PipeTransform } from '@angular/core';
import { Competencia } from '../Model/Competencia/competencia';

@Pipe({
  name: 'filtroCompetencias'
})
export class FiltroCompetenciasPipe implements PipeTransform {

  transform(competencias: Competencia[], texto: string): Competencia[] {
    if(texto.length===0){
      return competencias;
    }
    texto = texto.toLowerCase();

    return competencias.filter(competencia =>{
      return competencia.nombre.toLowerCase().includes(texto);
    } );
  }

}
