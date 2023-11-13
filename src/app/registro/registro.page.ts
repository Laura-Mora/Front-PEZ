import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { Programa } from '../Model/Programa/programa';
import { ProgramaService } from '../Model/Programa/programa.service';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  mensajeError: string | undefined;
  error_visibility: boolean | undefined;

  //public programas = ["Maestría en ingeniería de sistemas y computación", "Maestría en Analitica para la inteligencia de negocios", "Maestría en Seguridad informática"]

  public tipos =["Director","Estudiante"];

  nombre: string = "";
  email: string = "";
  password: string = "";
  programasSeleccionados: number[] = [];
  tipo:string="";
  isToastOpen = false;

  programas: Programa[]=[];

  constructor(
    public alertController: AlertController,
    public nav: NavController,
    private loginService: LoginService,
    private router: Router,
    private programaService: ProgramaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.error_visibility = false;
    this.mensajeError = "";
    this.findProgramas();
  }

  findProgramas(){
    this.programaService.getProgramas().subscribe(
      results => {
        console.log(results);
        this.programas = results;
      },
      error => console.error(error)
    )
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

  validateEmail(email: string): boolean {
    // Regular expression to validate an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  async onRegister() {

   if (this.nombre.length === 0) {
      await this.alertaElementoNoSeleccionado(
        "Nombre de usuario vacío",
        "Para continuar con el registro se debe ingresar un nombre."
      );
    } else if (this.email.length === 0) { // TODO: hacer validacion del correo
      await this.alertaElementoNoSeleccionado(
        "Correo vacío",
        "Para continuar con el registro se debe ingresar un correo valido."
      );
    } else if (this.password.length === 0) {
      await this.alertaElementoNoSeleccionado(
        "Contraseña vacía",
        "Para continuar con el registro se debe ingresar una contraseña."
      );
    } else if (this.programasSeleccionados.length === 0 ) {
      await this.alertaElementoNoSeleccionado(
        "Programa no seleccionado",
        "Para continuar con el registro debes seleccionar el programa en el cual te encuentras."
      );
    } else if (!this.validateEmail(this.email)) {
      await this.alertaElementoNoSeleccionado(
        "Correo inválido",
        "Por favor, ingrese un correo válido."
      );
    }else {
      
      this.loginService.register(
        this.nombre,
        this.email,
        this.password,
        this.programasSeleccionados,
        this.tipo
      ).subscribe(
        results => {
          // console.log("ingreso exitoso: ", results);

          const usuario: Usuario | null = results.body;
          if (usuario !== null) {
            const authorizationHeader: string | null = results.headers.get('authorization');
            if (authorizationHeader !== null) {
              this.loginService.storeUser(usuario, authorizationHeader);
              //this.router.navigate(["formulario_registro"]);
            }
            this.presentToast('middle','El usuario ha sido creado' );
          }
        },
        error => {
          this.error_visibility = true;
          this.mensajeError = error;
          console.error(error);
          if (error.status === 400 && error.error.detail === "El cooreo que ingreso ya está en uso") {
            this.presentToast('middle','El correo ingresado ya está en uso. Por favor, ingrese otro correo.');
          } else {
            console.error(error);
          }
        }
      );
    }
  }

  // go to login page
  login() {
    this.router.navigate(["login"]);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  
}
