import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-home-directores',
  templateUrl: './home-directores.page.html',
  styleUrls: ['./home-directores.page.scss'],
})
export class HomeDirectoresPage implements OnInit {

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

  ngOnInit() {
  }

  logout() {
    this.login.logout();
  }
}
