import { Asignatura } from "../Asignatura/asignatura";
import { PerfilEstudiante } from "../Perfil-Estudiante/perfil-estudiante";
import { Programa } from "../Programa/programa";

export class Usuario {
    id!: number;
    nombre!: string;
    correo!: string;
    contrasenia!: string;
    semestre!: number;
    programa!: Programa[];
    tipo!: string;

    perfilEstudiante_id!: number;
    perfilEstudiante!: PerfilEstudiante;

    //asignaturasSugeridas: Asignatura[] =[];
    
    constructor(){}
}
