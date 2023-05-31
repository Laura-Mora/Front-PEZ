import { Actividad } from "../Actividad/actividad";
import { Competencia } from "../Competencia/competencia";
import { ComponenteClase } from "../ComponenteClase/componente-clase";
import { Horario } from "../Horario/horario";
import { ModoEnsenianza } from "../Modo-Enseñanza/modo-ensenianza";
import { Profesor } from "../Profesor/profesor";
import { Tematica } from "../Tematica/tematica";

export class Asignatura {
    id!: number;
    nombre!: string;
    creditos!: number;
    complejidad!: string;
    poblacionObjetivo!: string;
    tematicas: Tematica[] = [];
    actividades: Actividad[] = [];
    competencias: Competencia[] = [];
    modoEnsenianza!: ModoEnsenianza;
    profesores: Profesor[] = [];
    horarios: Horario[] = [];
    modalidad!: ComponenteClase;

    constructor(){}
}
