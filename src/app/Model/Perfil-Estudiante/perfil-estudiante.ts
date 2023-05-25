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
    asignaturasCursadas: Asignatura[] = [];
    asignaturasGustadas: Asignatura[] = [];
    asignaturasNoGustadas: Asignatura[] = [];

    tematicasGustan: Tematica[] = [];
    actividadesGustan: Actividad[] = [];
    competenciasGustan: Competencia[] = [];
    modoPreferencia: ModoEnsenianza[] = [];
    horarioPreferencia: Horario[] = [];
    modalidadPreferencia: ComponenteClase[] = [];

    constructor(){

    }
}

