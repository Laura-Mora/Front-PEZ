import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resenia } from './resenia';
import { Observable } from 'rxjs';
import { NetService } from 'src/app/Utils/net.service';

@Injectable({
  providedIn: 'root'
})
export class ReseniaServiceService {

  constructor(
    private net: NetService,
    private http: HttpClient
  ) { }

  resenia(
    aprendizaje: boolean,
    tematicasAbordadas: boolean,
    estrategiasPedago: boolean,
    actividadesAsig: boolean,
    complejidad: string,
    agradoProfe: boolean,
    asignaturaVidaTrab: string,
    cargaTrabajo: boolean,
    exigenciaAsig: string,
    notasTiempo: boolean,
    retroalimentacion: boolean,
    incidenciaProfe: boolean,
    comentarios: string ,
    idAsignatura: number
  ):Observable<HttpResponse<Resenia>>{
    const url = `${environment.baseUrl}/resenia/crear_resenia`;
  
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Configurar el encabezado
  
    const data = {
      aprendizaje: Boolean(aprendizaje),
      tematicasAbordadas: Boolean(tematicasAbordadas), // Corregido: coincidir con la clave esperada
      estrategiasPedagogicasProfesor: Boolean(estrategiasPedago), // Corregido: coincidir con la clave esperada
      actividadesAsignatura: Boolean(actividadesAsig), // Corregido: coincidir con la clave esperada
      complejidad: complejidad,
      agradoProfesor: Boolean(agradoProfe),
      vidaOTrabajo: asignaturaVidaTrab, // Corregido: coincidir con la clave esperada
      cargaAsignatura: Boolean(cargaTrabajo), // Corregido: coincidir con la clave esperada
      nivelExigencia: exigenciaAsig,
      entregaNotas: Boolean(notasTiempo),
      retroalimentacion: Boolean(retroalimentacion),
      comentarios: comentarios,
      incidenciaProfesor: incidenciaProfe, // Corregido: coincidir con la clave esperada
      asignatura_id: idAsignatura
    };
  
    console.log(headers);
    console.log(JSON.stringify(data));
  
    return this.http.post<Resenia>(url, data, { headers: headers, observe: 'response' });
  }
}
