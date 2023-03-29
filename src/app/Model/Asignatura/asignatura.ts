import { Actividad } from "../Actividad/actividad";
import { Competencia } from "../Competencia/competencia";
import { ComponenteClase } from "../ComponenteClase/componente-clase";
import { Contenido } from "../Contenido/contenido";
import { Horario } from "../Horario/horario";
import { ModoEnsenianza } from "../Modo-Enseñanza/modo-ensenianza";
import { Profesor } from "../Profesor/profesor";

export class Asignatura {
    id!: number;
    nombre!: string;
    contenindo: Contenido[] = [];
    actividades: Actividad[] = [];
    competencias: Competencia[] = [];
    modoEnsenianza!: ModoEnsenianza;
    profesores: Profesor[] = [];
    horarios: Horario[] = [];
    modalidad!: ComponenteClase;

    constructor(){}
}
