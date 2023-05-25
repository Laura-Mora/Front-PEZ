import { Injectable } from '@angular/core';
import { Asignatura } from './asignatura';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetService } from 'src/app/Utils/net.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private net: NetService) { }

  getAsignaturas(): Observable<Asignatura[]> {
    const url = `${environment.baseUrl}/asignatura`;
    return this.net.get<Asignatura[]>(url);
  }

  getAsignaturaById(id:number): Observable<Asignatura>{
    const url = `${environment.baseUrl}/asignatura/${id}`;
    return this.net.get<Asignatura>(url);
  }
}
