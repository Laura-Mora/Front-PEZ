import { Asignatura } from "../Asignatura/asignatura";

export class Usuario {
    id!: number;
    nombre!: string;
    correo!: string;
    contrasenia!: string;
    semestre!: number;
    profesion!:string;
    areaDesempenio!: string;

    asignaturasSugeridas: Asignatura[] =[];
    
    constructor(){}
}
