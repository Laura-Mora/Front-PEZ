import { Asignatura } from "../Asignatura/asignatura";

export class Componente {
    id!: number;
    nombre!: string;
    cantCreditos!: number;
    asignaturasElectivas: Asignatura[] = [];
    asignaturasObligatorias: Asignatura[] = [];

    constructor(){
        
    }
    
}
