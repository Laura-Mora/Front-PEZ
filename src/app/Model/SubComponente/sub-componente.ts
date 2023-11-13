import { Asignatura } from "../Asignatura/asignatura";

export class SubComponente {
    id!: number;
    nombre!: string;
    cantCreditos!: number;
    creditosVistos!: number;
    cantAsiganturas!: number;
    asignaturas: Asignatura[] = []; //Asignaturas para mostrar el avance del programa
    asignaturasElectivas: Asignatura[] = [];
    asignaturasObligatorias: Asignatura[] = [];

    constructor(){
        
    }
}
