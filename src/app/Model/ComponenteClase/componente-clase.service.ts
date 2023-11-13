import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComponenteClase } from './componente-clase';

@Injectable({
  providedIn: 'root'
})
export class ComponenteClaseService {

  constructor(private net: NetService) { }

  getComponenteClase(): Observable<ComponenteClase[]> {
    const url = `${environment.baseUrl}/componenteClase`;
    return this.net.get<ComponenteClase[]>(url);
  }
}
