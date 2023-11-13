import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { Programa } from './programa';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private net: NetService) { }

  getProgramas(){
    const url = `${environment.baseUrl}/programa`;
    return this.net.get<Programa[]>(url);
  }

  getProgramaById(id:number): Observable<Programa>{
    const url = `${environment.baseUrl}/programa/${id}`;
    return this.net.get<Programa>(url);
  }
}
