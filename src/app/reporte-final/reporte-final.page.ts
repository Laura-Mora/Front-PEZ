import { Component, OnInit } from '@angular/core';
import { Reporte } from '../Model/Reporte/reporte';
import { ReporteService } from '../Model/Reporte/reporte.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporte-final',
  templateUrl: './reporte-final.page.html',
  styleUrls: ['./reporte-final.page.scss'],
})
export class ReporteFinalPage implements OnInit {

  reportes: Reporte[] = [];

  constructor(
    private activatedRoute :ActivatedRoute,
    private reporteService: ReporteService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const idPrograma = paramMap.get('programaSeleccionado');
      if (idPrograma !== null) {
        this.findReporte(+idPrograma);
      } 
    });
  }

  findReporte(idPrograma:Number){
    this.reporteService.reportePrograma(idPrograma).subscribe(
      results => {
        console.log(results);
        this.reportes = results;
      },
      error => console.error(error)
    )
  }
  loadData($event: any){

  }

}
