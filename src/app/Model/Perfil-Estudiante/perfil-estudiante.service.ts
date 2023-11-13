import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PerfilEstudiante } from './perfil-estudiante';

@Injectable({
  providedIn: 'root'
})
export class PerfilEstudianteService {

  constructor(private net: NetService) { }

  getPerfiles(){
    const url = `${environment.baseUrl}/perfilEstudiante`;
    return this.net.get<PerfilEstudiante[]>(url);
  }

  getPerfilById(id:number): Observable<PerfilEstudiante>{
    const url = `${environment.baseUrl}/perfilEstudiante/${id}`;
    return this.net.get<PerfilEstudiante>(url);
  }
}
