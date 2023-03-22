import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";

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
    //private login: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    //console.log("Click");
   //this.router.navigate(["registro"]);
  }

  async onLogin() {
  /*  if (this.email.length === 0) { // TODO: hacer validacion del correo
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
            // console.log("ingreso exitoso: ", results)
            // console.log(results.headers)
            const usuario: UsuarioGeneral = results.body;

            this.login.storeUser(usuario, results.headers.get('authorization'));
            this.router.navigate(["auth-home"]);
          },
          error => {
            console.error(error);
            this.password = "";
          }
        );
    }*/
  }
}
