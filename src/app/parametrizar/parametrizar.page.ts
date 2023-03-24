import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-parametrizar',
  templateUrl: './parametrizar.page.html',
  styleUrls: ['./parametrizar.page.scss'],
})
export class ParametrizarPage implements OnInit {

  public programas = ["Maestría en ingeniería de sistemas y computación", "Maestría en Analitica para la inteligencia de negocios", "Maestría en Inteligencia Artificila", "Maestría en Seguridad informática"]

  public componentes = ["1","2"]

  public enfasis = ["11","12"]

  public asignaturas = ["a","b","c"]

  programa: string = "";
  componente: string = "";
  asignatura: string= "";

  constructor(
    public alertController: AlertController,
    public nav: NavController,
    //private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }


}
