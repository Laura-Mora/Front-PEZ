import { Component, OnInit } from '@angular/core';
import { Programa } from '../Model/Programa/programa';
import { Router } from '@angular/router';
import { ProgramaService } from '../Model/Programa/programa.service';
import { ToastController } from '@ionic/angular';
import { Reporte } from '../Model/Reporte/reporte';

@Component({
  selector: 'app-reporte-asign',
  templateUrl: './reporte-asign.page.html',
  styleUrls: ['./reporte-asign.page.scss'],
})
export class ReporteAsignPage implements OnInit {

  programas: Programa[]=[];
  programaSeleccionado: Number = 0;

  constructor(
    private router: Router,
    private programaService: ProgramaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.findProgramas();
  }

  consultar(){

  }

  enviarCorreo(){

  }


  findProgramas(){
    this.programaService.getProgramas().subscribe(
      results => {
        console.log(results);
        this.programas = results;
      },
      error => console.error(error)
    )
  }

}
