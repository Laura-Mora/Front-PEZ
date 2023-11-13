import { Asignatura } from "../Asignatura/asignatura";
import { SubComponente } from "../SubComponente/sub-componente";

export class Componente {
    id!: number;
    nombre!: string;
    cantCreditos!: number;
    creditosVistos!: number;
    asignaturas: Asignatura[] = []; //Asignaturas para el avance del programa
    asignaturasElectivas: Asignatura[] = [];
    asignaturasObligatorias: Asignatura[] = [];
    subcomponentes: SubComponente[] = [];

    constructor(){
        
    }
    
}
