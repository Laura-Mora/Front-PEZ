import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { FormPersoAsignPage } from '../form-perso-asign/form-perso-asign.page';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { UsuarioService } from '../Model/Usuario/usuario.service';

@Component({
  selector: 'app-suge-asignaturas',
  templateUrl: './suge-asignaturas.page.html',
  styleUrls: ['./suge-asignaturas.page.scss'],
})
export class SugeAsignaturasPage implements OnInit {

  asignaturasSuge: Asignatura[] = [];
  asignaturasPrefe: Asignatura[] = [];

  usuario: Usuario | null;

  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
    private uservice: UsuarioService
  ) { 
    this.usuario = this.loginService.getUser();
  }

  ngOnInit() {
    console.log(this.usuario);
    this.verificarUsuario();
  }

  infoAsignatura(){
    
  }

  findAsignaturaSuge(id:number){
    this.uservice.recomendar_asignaturas(id).subscribe(
      results => {
        console.log(results);
        this.asignaturasSuge = results;
      },
      error => console.error(error)
    )
  }

  findAsignaturaPrefe(id:number){
    this.uservice.sugerir_asignaturas_por_preferencias(id).subscribe(
      results => {
        console.log(results);
        this.asignaturasPrefe = results;
      },
      error => console.error(error)
    )
  }

  verificarUsuario() {
    try {
      if(this.usuario?.perfilEstudiante_id===null){
        this.openModal();
      }else{
        if (this.usuario && this.usuario.perfilEstudiante_id) {
          this.findAsignaturaSuge(this.usuario.perfilEstudiante_id);
          this.findAsignaturaPrefe(this.usuario.perfilEstudiante_id);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  async openModal(){
    const modal = await this.modalController.create(
      {component: FormPersoAsignPage}
    );
    modal.onDidDismiss().then( () => {
      this.usuario = this.loginService.getUser();
      this.verificarUsuario();
    });
    await modal.present();
  }


}
