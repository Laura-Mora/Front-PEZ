import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { FormPersoAsignPage } from '../form-perso-asign/form-perso-asign.page';

@Component({
  selector: 'app-suge-asignaturas',
  templateUrl: './suge-asignaturas.page.html',
  styleUrls: ['./suge-asignaturas.page.scss'],
})
export class SugeAsignaturasPage implements OnInit {

  asignaturas = [""];

  usuario: Usuario | null;

  constructor(
    private loginService: LoginService,
    private modalController: ModalController,
  ) { 
    this.usuario = this.loginService.getUser();
  }

  ngOnInit() {
    console.log(this.usuario);
    this.verificarUsuario();
  }

  infoAsignatura(){
    
  }

  findAsignaturas(){

  }

  verificarUsuario() {
    try {
      if(this.usuario?.perfilEstudiante_id===null){
        this.openModal();
      }else{
        this.findAsignaturas();
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
