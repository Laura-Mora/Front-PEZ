import { Component, OnInit } from '@angular/core';
import { ProgramaService } from '../Model/Programa/programa.service';
import { Programa } from '../Model/Programa/programa';
import { Usuario } from '../Model/Usuario/usuario';
import { UsuarioService } from '../Model/Usuario/usuario.service';
import { LoginService } from '../servicios/login.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sub-menu-avance-programa',
  templateUrl: './sub-menu-avance-programa.page.html',
  styleUrls: ['./sub-menu-avance-programa.page.scss'],
})
export class SubMenuAvanceProgramaPage implements OnInit {

  programasSuge: Programa[] = [];
  usuario: Usuario | null;
  idProgramaSelect: Number = 0;

  constructor(
    private loginService: LoginService,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    private userService: UsuarioService
  ) { 
    this.usuario = this.loginService.getUser();
    console.log(this.usuario);
    this.findProgramasSugeridos();
  }

  ngOnInit() {
  }

  findProgramasSugeridos(){
    if (this.usuario?.id !== undefined) {
      this.userService.sugerir_programas(this.usuario.id).subscribe(
        results => {
          this.programasSuge = results;
          console.log(this.programasSuge);
        },
        error => {
          console.log(error);
          
        }
      );
    } else {
      console.log('El ID del usuario no está definido.');
      
    }
  }
  avanceProgramaSuge(){

  }
  quefalta(){
    
  }

}
