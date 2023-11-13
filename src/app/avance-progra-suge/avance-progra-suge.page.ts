import { Component, OnInit } from '@angular/core';
import { Programa } from '../Model/Programa/programa';
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../Model/Usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-avance-progra-suge',
  templateUrl: './avance-progra-suge.page.html',
  styleUrls: ['./avance-progra-suge.page.scss'],
})
export class AvancePrograSugePage implements OnInit {

  programas: Programa = new Programa();
  faltaPrograma: Programa = new Programa();
  usuario: Usuario | null;
  idPrograma: Number = 0;
  asignaturasC: Asignatura[] = [];

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
        this.mostrarAvanceEstudiante(+programaID);
        this.asiganturasComun(+programaID);
        this.mostrarAsignaturasCursarPrograma(+programaID)
      } 
    });
  }

  mostrarAvanceEstudiante(id:Number) {
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.avancePrograSuge(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.programas = JSON.parse(results);
          console.log(this.programas);
        },
        error => {
          console.log(error);
          
        }
      );
    } else {
      console.log('El ID del usuario no está definido.');
      
    }
  }

  asiganturasComun(id:Number){
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.asignaturaComun(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.asignaturasC = results;
          console.log(this.asignaturasC);
        },
        error => {
          console.log(error);
          
        }
      );
    } else {
      console.log('El ID del usuario no está definido.');
      
    }
  }

  porgramaSugePDF(){
    if (this.usuario?.id !== undefined) {
      this.userService.programaSuguePDG(this.usuario.id,this.idPrograma).subscribe(
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

  mostrarAsignaturasCursarPrograma(id:Number){
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.cursarPrograSuge(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.faltaPrograma = JSON.parse(results);
          console.log(this.faltaPrograma);
        },
        error => {
          console.log(error);
          
        }
      );
    } else {
      console.log('El ID del usuario no está definido.');
      
    }
  }
}
