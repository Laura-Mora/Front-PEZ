import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { Actividad } from './actividad';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private net: NetService) { }

  getActividades(): Observable<Actividad[]> {
    const url = `${environment.baseUrl}/actividad`;
    return this.net.get<Actividad[]>(url);
  }

}
