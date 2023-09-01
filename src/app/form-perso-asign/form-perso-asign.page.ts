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
import { LoginService } from '../servicios/login.service';
import { Usuario } from '../Model/Usuario/usuario';
import { UsuarioService } from '../Model/Usuario/usuario.service';
import { PerfilEstudianteService } from '../Model/Perfil-Estudiante/perfil-estudiante.service';
import { PerfilEstudiante } from '../Model/Perfil-Estudiante/perfil-estudiante';

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

  usuario: Usuario | null;
  perfilEstudiante: PerfilEstudiante = new PerfilEstudiante; 

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
    private loginService: LoginService,
    private modalController:ModalController, 
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private aservice : AsignaturaService,
    private tservice: TematicaService,
    private cservice: CompetenciaService,
    private acservice: ActividadService,
    private hservice: HorarioService,
    private ccservice: ComponenteClaseService,
    private modoservice: ModoEnsenianzaService,
    private userservice: UsuarioService,
    private perfservice: PerfilEstudianteService
  ) { 
    this.usuario = this.loginService.getUser();
  }

  ngOnInit() {
    this.findAsignatura();
    this.findTematica();
    this.findCompetencia();
    this.findActividad();
    this.findHorarios();
    this.findComponentesClase();
    this.findModosEnsenianza();
    this.findPerfilUsuario();
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

  async alertaElementoNoSeleccionado(elemento: any, mensaje: any) {
    const alert = await this.alertController.create({
      cssClass: "custom-class-alert",
      header: "Error",
      subHeader: elemento,
      message: mensaje,
      buttons: ["OK"],
    });
    await alert.present();
  }

  async guardar(){
    if(this.profesion.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Profesión del usuario vacío",
        "Para continuar con el registro de su perfil se debe ingresar una profesión."
      );
    }else if(this.areaDesempenio.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Área de desempeño del usuario vacío",
        "Para continuar con el registro de su perfil se debe ingresar un área."
      );
    }else if(this.motivo.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Motivo del usuario vacío",
        "Para continuar con el registro de su perfil se debe ingresar un motivo."
      );
    }else if(this.semestre === 0){
      await this.alertaElementoNoSeleccionado(
        "Semestre del usuario vacío",
        "Para continuar con el registro de su perfil se debe ingresar un semestre."
      );
    }else if(this.tematicasUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Tematicas del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos una temática."
      );
    }else if(this.competenciasUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Competencias del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos una competencia."
      );
    }else if(this.actividadesUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Actividades del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos una actividad."
      );
    }else if(this.horariosUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Horarios del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos un horario."
      );
    }else if(this.modalidadUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Modalidad del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos una modalidad."
      );
    }else if(this.modosUsuario.length === 0){
      await this.alertaElementoNoSeleccionado(
        "Modo del usuario no seleccionadas",
        "Para continuar con el registro de su perfil se debe seleccionar al menos un modo."
      );
    } else{
      let id: number = 0;
      if (this.usuario !== null){
        id = this.usuario.id;
      }

      const semestreNum = Number(this.semestre);

      this.userservice.perso(
        id,
        this.profesion,
        this.areaDesempenio,
        this.motivo,
        this.javeriano,
        semestreNum,
        this.asignaturasCursadas,
        this.tematicasUsuario,
        this.competenciasUsuario,
        this.actividadesUsuario,
        this.horariosUsuario,
        this.modalidadUsuario,
        this.modosUsuario
      ).subscribe(
        results =>{
          console.log(results);
          this.closeModal();
          this.loginService.updateUserSession();
        },
        error => console.error(error)
      );
      this.presentToast("Tus datos han sido actualizados");
    }
  }

  async presentToast(mensaje: any){
    const toast = await this.toastCtrl.create(
      {
        message: mensaje,
        duration: 4000
      }
    );
    toast.present();
  }

  findPerfilUsuario(){
    try {
      if(this.usuario?.perfilEstudiante_id!==null){
        const perfilEstudianteId = this.usuario?.perfilEstudiante_id;

        if (typeof perfilEstudianteId === 'number') {
          this.perfservice.getPerfilById(perfilEstudianteId).subscribe(
            results =>{
              console.log(results);
              this.perfilEstudiante = results;

            },
            error => console.error(error)
          );
        }
    }
    } catch (error) {
      console.error(error);
    }

  }
}
