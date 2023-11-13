import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../Model/Usuario/usuario';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../Model/Usuario/usuario.service';

@Component({
  selector: 'app-sub-menu-programa-suge',
  templateUrl: './sub-menu-programa-suge.page.html',
  styleUrls: ['./sub-menu-programa-suge.page.scss'],
})
export class SubMenuProgramaSugePage implements OnInit {

  idProgramaSelect: Number = 0;
  usuario: Usuario | null;

  constructor(
    public toastCtrl: ToastController,
    private activatedRoute :ActivatedRoute, 
    private loginService: LoginService,
    private userService: UsuarioService
    ) { 
      this.usuario = this.loginService.getUser();
      console.log(this.usuario);

    }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const programaID = paramMap.get('programaID');
      if (programaID !== null) {
        this.idProgramaSelect=+programaID;
      } 
    });
  }

  avanceProgramaSuge(){

  }

  porgramaSugePDF(){
    if (this.usuario?.id !== undefined) {
      this.userService.programaSuguePDG(this.usuario.id,this.idProgramaSelect).subscribe(
        results => {
          console.log(results);
        },
        error => {
          console.log(error);
          
        }
      );
      this.presentToast("A tu correo llegara el reporte solicitado");
    } else {
      console.log('El ID del usuario no está definido.');
      
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

}
