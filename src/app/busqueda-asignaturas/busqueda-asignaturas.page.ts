import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-busqueda-asignaturas',
  templateUrl: './busqueda-asignaturas.page.html',
  styleUrls: ['./busqueda-asignaturas.page.scss'],
})
export class BusquedaAsignaturasPage implements OnInit {

  
  textoBuscar='';
  facultadSelect='';
  tematicaSelect='';

  collapseCard = true;

  constructor(
    public router: Router,
    public navCtrl : NavController,
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

  }
  
  findTematica(){

  }

  infoAsignatura(){

  }

  loadData($event: any){

  }
}
