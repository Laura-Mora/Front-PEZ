import { Actividad } from "../Actividad/actividad";
import { Asignatura } from "../Asignatura/asignatura";
import { Competencia } from "../Competencia/competencia";
import { ComponenteClase } from "../ComponenteClase/componente-clase";
import { Horario } from "../Horario/horario";
import { ModoEnsenianza } from "../Modo-Enseñanza/modo-ensenianza";
import { Tematica } from "../Tematica/tematica";

export class PerfilEstudiante {
    id!: number;
    idEstudiante!: number;
    javeriano!:boolean;
    profesion!:string;
    areaDesempenio!: string;
    asignaturasCursadas: Asignatura[] = [];
    asignaturasGustadas: Asignatura[] = [];
    asignaturasNoGustadas: Asignatura[] = [];

    tematicasGusto: Tematica[] = [];
    actividadesGusto: Actividad[] = [];
    competenciasGusto: Competencia[] = [];
    modoEnsenianzaPreferencia: ModoEnsenianza[] = [];
    horariosPreferencias: Horario[] = [];
    modalidadPreferencia: ComponenteClase[] = [];

    constructor(){

    }
}

