import { Componente } from "../Componente/componente";

export class Programa {
    id!: number;
    nombre!: string;
    componentes: Componente[] = [];
    
    constructor(){}
}
