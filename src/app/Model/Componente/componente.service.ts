import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Componente } from './componente';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {

  constructor(private net: NetService) { }

  getComponentes(){
    const url = `${environment.baseUrl}/componente`;
    return this.net.get<Componente[]>(url);
  }

  getComponenteById(id:number): Observable<Componente>{
    const url = `${environment.baseUrl}/componente/${id}`;
    return this.net.get<Componente>(url);
  }
}
