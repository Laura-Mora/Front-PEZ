import { Component, OnInit } from '@angular/core';
import { Programa } from '../Model/Programa/programa';
import { Router } from '@angular/router';
import { ProgramaService } from '../Model/Programa/programa.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Reporte } from '../Model/Reporte/reporte';
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { ReporteService } from '../Model/Reporte/reporte.service';

@Component({
  selector: 'app-reporte-asign',
  templateUrl: './reporte-asign.page.html',
  styleUrls: ['./reporte-asign.page.scss'],
})
export class ReporteAsignPage implements OnInit {

  programas: Programa[]=[];
  programaSeleccionado: Number = 0;
  usuario: Usuario | null;
  correo!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public toastCtrl: ToastController,
    private programaService: ProgramaService,
    public alertController: AlertController,
    private toastController: ToastController,
    private reporteService: ReporteService
  ) {
    this.usuario = this.loginService.getUser();
  }

  ngOnInit() {
    this.findProgramas();
  }

  consultar(){

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

  async enviarCorreo(){
    if(this.programaSeleccionado == 0){
      await this.alertaElementoNoSeleccionado(
        "Profesión del usuario vacío",
        "Para continuar con el registro de su perfil se debe ingresar una profesión."
      );
    }else{

      if (this.usuario !== null){
        this.correo = this.usuario?.correo;
      }

      this.reporteService.reporteExcelPrograma(this.programaSeleccionado,this.correo).subscribe(
        results =>{
          console.log(results);
        },
        error => console.error(error)
      );
      this.presentToast("A tu correo llegara el reporte solicitado");
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


  findProgramas(){
    this.programaService.getProgramas().subscribe(
      results => {
        console.log(results);
        this.programas = results;
      },
      error => console.error(error)
    )
  }

}
