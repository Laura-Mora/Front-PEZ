import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetService } from 'src/app/Utils/net.service';
import { Competencia } from './competencia';


@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  constructor(private net: NetService) { }

  getCompetencias(): Observable<Competencia[]> {
    const url = `${environment.baseUrl}/competencia`;
    return this.net.get<Competencia[]>(url);
  }
}
