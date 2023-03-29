import { Actividad } from "../Actividad/actividad";
import { Asignatura } from "../asignatura/asignatura";
import { Competencia } from "../Competencia/competencia";
import { ComponenteClase } from "../ComponenteClase/componente-clase";
import { Contenido } from "../Contenido/contenido";
import { Horario } from "../Horario/horario";
import { ModoEnsenianza } from "../Modo-Enseñanza/modo-ensenianza";

export class PerfilEstudiante {
    id!: number;
    idEstudiante!: number;
    javeriano!:boolean;
    asignaturasCursadas: Asignatura[] = [];
    asignaturasGustadas: Asignatura[] = [];
    asignaturasNoGustadas: Asignatura[] = [];

    tematicasGustan: Contenido[] = [];
    actividadesGustan: Actividad[] = [];
    competenciasGustan: Competencia[] = [];
    modoPreferencia: ModoEnsenianza[] = [];
    horarioPreferencia: Horario[] = [];
    modalidadPreferencia: ComponenteClase[] = [];

    constructor(){

    }
}

