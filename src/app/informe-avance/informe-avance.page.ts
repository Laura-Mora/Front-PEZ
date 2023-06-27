import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from '../Model/Usuario/usuario';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { Programa } from '../Model/Programa/programa';
import { LoginService } from '../servicios/login.service';
import { ProgramaService } from '../Model/Programa/programa.service';
import { PerfilEstudiante } from '../Model/Perfil-Estudiante/perfil-estudiante';
import { PerfilEstudianteService } from '../Model/Perfil-Estudiante/perfil-estudiante.service';
import { Componente } from '../Model/Componente/componente';
import { SubComponente } from '../Model/SubComponente/sub-componente';
import { ComponenteService } from '../Model/Componente/componente.service';
import { SubComponenteService } from '../Model/SubComponente/sub-componente.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-informe-avance',
  templateUrl: './informe-avance.page.html',
  styleUrls: ['./informe-avance.page.scss'],
})
export class InformeAvancePage implements OnInit {

  programas: Programa[]  = [];
  componentes: Componente[] = [];
  subcomponentes: SubComponente[] = [];
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
    private perfilService: PerfilEstudianteService,
    private compoService: ComponenteService,
    private subcompoService: SubComponenteService
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
    const programasAux: Programa[] = this.usuario?.programa || [];
    console.log(this.programas);

    for (const programa of programasAux) {
      this.proService.getProgramaById(programa.id).subscribe(
        (programaObtenido) => {
          this.programas.push(programaObtenido);
          console.log(programaObtenido);
          
          for (const componente of programaObtenido.componentes) {
            console.log('Obteniendo componente:', componente.id); 
            this.compoService.getComponenteById(componente.id).subscribe(
              (componenteObtenido) => {
                this.componentes.push(componenteObtenido);
                console.log(componenteObtenido);
               
                if (componenteObtenido.subcomponentes!== undefined && Array.isArray(componenteObtenido.subcomponentes)){
                  
                  for (const sub of componenteObtenido.subcomponentes){
                    this.subcompoService.getSubComponenteById(sub.id).subscribe(
                      (subcomponennteObtenido) => {
                        this.subcomponentes.push(subcomponennteObtenido);
                        console.log(subcomponennteObtenido);
                      },
                      (error) => {
                        console.error(error);
                      }
                    );
                  }

                }
              },
              (error) => {
                console.error(error);
              }
            );
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
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
