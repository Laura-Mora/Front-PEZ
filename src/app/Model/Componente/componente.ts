import { Asignatura } from "../Asignatura/asignatura";
import { SubComponente } from "../SubComponente/sub-componente";

export class Componente {
    id!: number;
    nombre!: string;
    cantCreditos!: number;
    asignaturasElectivas: Asignatura[] = [];
    asignaturasObligatorias: Asignatura[] = [];
    subcomponentes: SubComponente[] = [];

    constructor(){
        
    }
    
}
