import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";
import { LoginService } from '../servicios/login.service';
import { Usuario } from '../Model/Usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    public nav: NavController,
    public alertController: AlertController,
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    //console.log("Click");
   //this.router.navigate(["registro"]);
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

  async onLogin() {
    if (this.email.length === 0) { // TODO: hacer validacion del correo
      await this.alertaElementoNoSeleccionado(
        "Correo vacío",
        "Para continuar con el registro se debe ingresar un correo valido."
      );
    } else if (this.password.length === 0) {
      await this.alertaElementoNoSeleccionado(
        "Contraseña vacía",
        "Para continuar con el registro se debe ingresar una contraseña."
      );
    } else {
      this.login.login(this.email, this.password)
        .subscribe(
          results => {
            const usuario: Usuario | null = results.body;
            if (usuario !== null) {
              const authorizationHeader = results.headers.get('authorization') ?? '';
              this.login.storeUser(usuario, authorizationHeader);
              console.log(usuario);
              this.router.navigate(["home"]);
              /*if (usuario.tipo == "Estudiante"){
                this.router.navigate(["home"]);
              }else{
                this.router.navigate(["home-directores"]);
              }*/
            } else {
              // El valor es nulo, puedes manejar este caso según sea necesario
              console.error("La respuesta no contiene un objeto de usuario válido.");
            }
          },
          error => {
            console.error(error);
            this.password = "";
          }
        );
    }
  }
}
