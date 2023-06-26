import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from '../Model/Usuario/usuario';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { Programa } from '../Model/Programa/programa';
import { LoginService } from '../servicios/login.service';
import { ProgramaService } from '../Model/Programa/programa.service';
import { PerfilEstudiante } from '../Model/Perfil-Estudiante/perfil-estudiante';
import { PerfilEstudianteService } from '../Model/Perfil-Estudiante/perfil-estudiante.service';

@Component({
  selector: 'app-informe-avance',
  templateUrl: './informe-avance.page.html',
  styleUrls: ['./informe-avance.page.scss'],
})
export class InformeAvancePage implements OnInit {

  programas: Programa[]  = [];
  asignaturas: Asignatura[] = [];
  programasSuge: Programa[] = [];
  usuario: Usuario | null;
  perfil: PerfilEstudiante | undefined;

  constructor(
    private loginService: LoginService,
    private modalController:ModalController, 
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private proService: ProgramaService,
    private perfilService: PerfilEstudianteService
  ) { 
    this.usuario = this.loginService.getUser();
    console.log(this.usuario);
  }

  ngOnInit() {
    this.findProgramas();
    this.findAsignaturas();
  }

  closeModal(){
    this.modalController.dismiss();
  }

  findProgramas(){
    this.programas = this.usuario?.programa || [];
  }

  findAsignaturas(){
    const idPer = this.usuario?.perfilEstudiante_id;
    if (idPer !== undefined) {
      this.perfilService.getPerfilById(idPer).subscribe(
        results => {
          this.perfil = results;
          this.asignaturas = this.perfil.asignaturasCursadas;
        },
        error => {
          console.error(error);
        }
      );

    }

  }
}
