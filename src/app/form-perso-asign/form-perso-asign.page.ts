import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Tematica } from '../Model/Tematica/tematica';
import { Competencia } from '../Model/Competencia/competencia';
import { Actividad } from '../Model/Actividad/actividad';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { AsignaturaService } from '../Model/Asignatura/asignatura.service';
import { TematicaService } from '../Model/Tematica/tematica.service';
import { CompetenciaService } from '../Model/Competencia/competencia.service';
import { ActividadService } from '../Model/Actividad/actividad.service';
import { Horario } from '../Model/Horario/horario';
import { HorarioService } from '../Model/Horario/horario.service';
import { ComponenteClaseService } from '../Model/ComponenteClase/componente-clase.service';
import { ComponenteClase } from '../Model/ComponenteClase/componente-clase';
import { ModoEnsenianzaService } from '../Model/Modo-Enseñanza/modo-ensenianza.service';
import { ModoEnsenianza } from '../Model/Modo-Enseñanza/modo-ensenianza';

@Component({
  selector: 'app-form-perso-asign',
  templateUrl: './form-perso-asign.page.html',
  styleUrls: ['./form-perso-asign.page.scss'],
})
export class FormPersoAsignPage implements OnInit {

  tematicas: Tematica[] = [];
  competencias: Competencia[] = [];
  actividades: Actividad[] = [];
  asignaturas: Asignatura[] = [];
  horarios: Horario[] =[];
  componentesClase: ComponenteClase[] =[];
  modos: ModoEnsenianza[] = [];

  textoBuscar='';
  tematicaBuscar='';
  actividadBuscar='';
  competenciaBuscar='';

  profesion: string = "";
  areaDesempenio: string = "";
  motivo: string = "";
  javeriano: boolean = true;
  semestre: number = 0;
  asignaturasCursadas: number[] = [];
  tematicasUsuario: number[] = [];
  competenciasUsuario: number[] = [];
  actividadesUsuario: number[] = [];
  horariosUsuario: number[] = [];
  modalidadUsuario: number[] = [];
  modosUsuario: number[] = [];

  constructor(
    private modalController:ModalController, 
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private aservice : AsignaturaService,
    private tservice: TematicaService,
    private cservice: CompetenciaService,
    private acservice: ActividadService,
    private hservice: HorarioService,
    private ccservice: ComponenteClaseService,
    private modoservice: ModoEnsenianzaService
  ) { }

  ngOnInit() {
    this.findAsignatura();
    this.findTematica();
    this.findCompetencia();
    this.findActividad();
    this.findHorarios();
    this.findComponentesClase();
    this.findModosEnsenianza();
  }

  closeModal(){
    this.modalController.dismiss();
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

  findActividad(){
    this.acservice.getActividades().subscribe(
      results => {
        console.log(results);
        this.actividades = results;
      },
      error => console.error(error)
    )
  }

  findHorarios(){
    this.hservice.getHorarios().subscribe(
      results => {
        console.log(results);
        this.horarios = results;
      },
      error => console.error(error)
    )

  }
  
  findComponentesClase(){
    this.ccservice.getComponenteClase().subscribe(
      results => {
        console.log(results);
        this.componentesClase = results;
      },
      error => console.error(error)
    )
  }

  findModosEnsenianza(){
    this.modoservice.getModos().subscribe(
      results => {
        console.log(results);
        this.modos = results;
      },
      error => console.error(error)
    )
  }

  buscarAsignatura(event: any){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

  buscarTematica(event: any){
    const texto = event.target.value;
    this.tematicaBuscar = texto;
  }

  buscarCompetencia(event: any){
    const texto = event.target.value;
    this.competenciaBuscar = texto;
  }

  buscarActividades(event: any){
    const texto = event.target.value;
    this.actividadBuscar = texto;
  }


  guardar(){

  }

}
