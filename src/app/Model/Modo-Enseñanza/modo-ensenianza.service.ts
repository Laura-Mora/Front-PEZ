import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetService } from 'src/app/Utils/net.service';
import { ModoEnsenianza } from './modo-ensenianza';

@Injectable({
  providedIn: 'root'
})
export class ModoEnsenianzaService {

  constructor(private net: NetService) { }

  getModos(): Observable<ModoEnsenianza[]> {
    const url = `${environment.baseUrl}/modoEnsenianza`;
    return this.net.get<ModoEnsenianza[]>(url);
  }
}
