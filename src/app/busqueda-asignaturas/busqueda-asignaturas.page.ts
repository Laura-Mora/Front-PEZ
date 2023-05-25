import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { AsignaturaService } from '../Model/Asignatura/asignatura.service';
import { Tematica } from '../Model/Tematica/tematica';
import { TematicaService } from '../Model/Tematica/tematica.service';

@Component({
  selector: 'app-busqueda-asignaturas',
  templateUrl: './busqueda-asignaturas.page.html',
  styleUrls: ['./busqueda-asignaturas.page.scss'],
})
export class BusquedaAsignaturasPage implements OnInit {

  
  textoBuscar='';
  facultadSelect='';
  tematicaSelect='';

  asignaturas: Asignatura[] = [];
  tematicas: Tematica[] = [];

  collapseCard = true;

  constructor(
    public router: Router,
    public navCtrl : NavController,
    private aservice : AsignaturaService,
    private tservice: TematicaService
  ) { }

  ngOnInit() {
    this.findAsignatura();
    this.findTematica();
  }

  buscarAsignatura (event: any){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  findAsignatura(){
    this.aservice.getAsignaturas().subscribe(
      results => {
        console.log(results);
        this.asignaturas = results;
      },
      error => console.error(error)
    )
  }
  
  findTematica(){
    this.tservice.getTematica().subscribe(
      results => {
        console.log(results);
        this.tematicas = results;
      },
      error => console.error(error)
    )
  }

  infoAsignatura(){

  }

  loadData($event: any){

  }
}
