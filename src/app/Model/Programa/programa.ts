import { Componente } from "../Componente/componente";

export class Programa {
    id!: number;
    programa!: string; //nombre del programa para avance
    nombre!: string;
    componentes: Componente[] = [];
    cantCreditos!: number;
    cantCreditosCursados!: number;
    requisitoIngles!: Boolean;
    requisitoInglesCumplido!: Boolean;

    constructor(){}
}
