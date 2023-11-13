import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SubComponente } from './sub-componente';

@Injectable({
  providedIn: 'root'
})
export class SubComponenteService {

  constructor(private net: NetService) { }

  getSubComponentes(){
    const url = `${environment.baseUrl}/subcomponente`;
    return this.net.get<SubComponente[]>(url);
  }

  getSubComponenteById(id:number): Observable<SubComponente>{
    const url = `${environment.baseUrl}/subcomponente/${id}`;
    return this.net.get<SubComponente>(url);
  }
}
