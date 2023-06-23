import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { AsignaturaService } from '../Model/Asignatura/asignatura.service';
import { Competencia } from '../Model/Competencia/competencia';
import { CompetenciaService } from '../Model/Competencia/competencia.service';
import { ComponenteClase } from '../Model/ComponenteClase/componente-clase';
import { ComponenteClaseService } from '../Model/ComponenteClase/componente-clase.service';
import { ModoEnsenianza } from '../Model/Modo-Enseñanza/modo-ensenianza';
import { ModoEnsenianzaService } from '../Model/Modo-Enseñanza/modo-ensenianza.service';
import { Tematica } from '../Model/Tematica/tematica';
import { TematicaService } from '../Model/Tematica/tematica.service';
import { LoginService } from '../servicios/login.service';
import { Usuario } from '../Model/Usuario/usuario';

@Component({
  selector: 'app-busqueda-asignaturas',
  templateUrl: './busqueda-asignaturas.page.html',
  styleUrls: ['./busqueda-asignaturas.page.scss'],
})
export class BusquedaAsignaturasPage implements OnInit {

  
  textoBuscar='';
  tematicaSelect='';
  modalidadSelect=0;
  modoSelect=0;
  complejidadSelect='';
  competenciaSelect='';

  asignaturas: Asignatura[] = [];
  tematicas: Tematica[] = [];
  competencias: Competencia[] = [];
  modosEnse: ModoEnsenianza[] = [];
  modalidades: ComponenteClase[]=[]
  complejidades: String[] = ["Alta","Media","Baja"];

  usuario:Usuario | null;
  
  collapseCard = true;

  constructor(
    private loginService: LoginService,
    public router: Router,
    public navCtrl : NavController,
    private aservice : AsignaturaService,
    private tservice: TematicaService,
    private cservice: CompetenciaService,
    private modservice: ModoEnsenianzaService,
    private modalidadesservice: ComponenteClaseService
  ) { 
    this.usuario = this.loginService.getUser();
  }

  ngOnInit() {
    this.findAsignatura();
    this.findTematica();
    this.findCompetencia();
    this.findModoEnsenianza();
    this.findModalidad();
    console.log(this.usuario);
  }

  buscarAsignatura (event: any){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  buscarAsignaturaModalidad(event: any){
    const id = event.target.value;
    this.modalidadSelect = id;
    console.log(this.modalidadSelect);
  }

  buscarAsignaturaComplejidad(event: any){
    const complejidad = event.target.value;
    this.complejidadSelect = complejidad;
  }

  buscarAsiganturaTematica(event: any){
    const tema = event.target.value;
    this.tematicaSelect = tema;
  }

  buscarAsiganturaCompetencia(event: any){
    const compe = event.target.value;
    this.competenciaSelect = compe;
  }

  buscarAsignaturaModo(event: any){
    const modoE = event.target.value;
    this.modoSelect = modoE;
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

  findCompetencia(){
    this.cservice.getCompetencias().subscribe(
      results => {
        console.log(results);
        this.competencias = results;
      },
      error => console.error(error)
    )
  }

  findModoEnsenianza(){
    this.modservice.getModos().subscribe(
      results => {
        console.log(results);
        this.modosEnse = results;
      },
      error => console.error(error)
    )
  }

  findModalidad(){
    this.modalidadesservice.getComponenteClase().subscribe(
      results => {
        console.log(results);
        this.modalidades = results;
      },
      error => console.error(error)
    )
  }

  borrarFiltros(){
    this.textoBuscar='';
    this.tematicaSelect='';
    this.modalidadSelect=0;
    this.modoSelect=0;
    this.complejidadSelect='';
    this.competenciaSelect='';
  }

  infoAsignatura(){

  }

  loadData($event: any){

  }
}
