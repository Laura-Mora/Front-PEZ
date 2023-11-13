import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Horario } from './horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private net: NetService) { }

  getHorarios(): Observable<Horario[]> {
    const url = `${environment.baseUrl}/horario`;
    return this.net.get<Horario[]>(url);
  }


}
