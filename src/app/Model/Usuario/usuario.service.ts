import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';
import { PerfilEstudiante } from '../Perfil-Estudiante/perfil-estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private net: NetService) { }

  perso(
    idUsuario: number,
    profesion: string,
    areaDesempenio: string,
    motivo: string,
    javeriano: boolean,
    semestre: number,
    asignaturasCursadas: number[],
    tematicasUsuario: number[],
    competenciasUsuario: number[],
    actividadesUsuario: number[],
    horariosUsuario: number[],
    modalidadUsuario: number[],
    modosUsuario: number[]
  ):Observable<HttpResponse<Usuario>>{
    const url = `${environment.baseUrl}/perfilEstudiante/crear_perfil`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const data = {
        idUsuario: Number(idUsuario),
        profesion: profesion,
        javeriano: Boolean(javeriano),
        semestre: Number(semestre),
        areaDesempenio: areaDesempenio,
        motivo: motivo,
        asignaturasCursadas: asignaturasCursadas,
        tematicasUsuario: tematicasUsuario,
        competenciasUsuario: competenciasUsuario,
        actividadesUsuario: actividadesUsuario,
        horariosUsuario: horariosUsuario,
        modalidadUsuario: modalidadUsuario,
        modosUsuario: modosUsuario
    };

    console.log(JSON.stringify(data));

    return this.net.post<any>(url, data);
    
  }

  avance(id:Number){
    const url = `${environment.baseUrl}/usuario/avance/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.net.get<any>(url);
  }

  recomendar_asignaturas(id:Number){
    const url = `${environment.baseUrl}/perfilEstudiante/sugerenciaAsignatura/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.net.get<any>(url);
  }

  sugerir_asignaturas_por_preferencias(id: Number){
    const url = `${environment.baseUrl}/perfilEstudiante/sugerenciaAsignaturaPreferencias/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.net.get<any>(url);
  }
}
