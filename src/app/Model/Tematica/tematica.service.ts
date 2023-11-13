import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { Tematica } from './tematica';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TematicaService {

  constructor(private net: NetService) { }

  getTematica(): Observable<Tematica[]> {
    const url = `${environment.baseUrl}/tematica`;
    return this.net.get<Tematica[]>(url);
  }
}
