import { Injectable } from '@angular/core';
import { NetService } from 'src/app/Utils/net.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private net: NetService) { }

  reportePrograma(id:Number){
    const url = `${environment.baseUrl}/usuario/reportePrograma/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.net.get<any>(url);
  }

  reporteExcelPrograma(id:Number, correo:string){
    const url = `${environment.baseUrl}/usuario/reporteProgramaExcel`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const data = {
      id: Number(id),
      correo: correo
    };

    console.log(JSON.stringify(data));

    return this.net.post<any>(url, data);

  }
}
