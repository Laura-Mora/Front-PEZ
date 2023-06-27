import { Asignatura } from "../Asignatura/asignatura";

export class SubComponente {
    id!: number;
    nombre!: string;
    cantCreditos!: number;
    cantAsiganturas!: number;
    asignaturasElectivas: Asignatura[] = [];
    asignaturasObligatorias: Asignatura[] = [];

    constructor(){
        
    }
}
