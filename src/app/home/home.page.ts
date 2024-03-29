import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private login: LoginService,
    private router: Router
  ) {
    /*const usr = this.login.getUser();
    // console.log("informacion: " + JSON.stringify(usr.informacionUsuario));
    if (!usr.informacionUsuario) {
      this.router.navigate(["formulario_registro"]);
    }*/
  }

  logout() {
    this.login.logout();
  }

}
