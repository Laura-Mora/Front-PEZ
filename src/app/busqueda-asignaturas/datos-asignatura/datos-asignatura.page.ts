import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../../Model/Asignatura/asignatura';
import { AsignaturaService } from '../../Model/Asignatura/asignatura.service';
import { Tematica } from '../../Model/Tematica/tematica';
import { TematicaService } from '../../Model/Tematica/tematica.service';
import { AlertController, ToastController } from '@ionic/angular';
import { ReseniaServiceService } from 'src/app/Model/Resenia/resenia-service.service';
import { Resenia } from 'src/app/Model/Resenia/resenia';

@Component({
  selector: 'app-datos-asignatura',
  templateUrl: './datos-asignatura.page.html',
  styleUrls: ['./datos-asignatura.page.scss'],
})
export class DatosAsignaturaPage implements OnInit {

  mensajeError: string | undefined;
  error_visibility: boolean | undefined;

  collapseCard = true;
  asignaturaSelect : Asignatura =  new Asignatura();
  tematicas: Tematica[] = [];

  aprendizaje: boolean = true;
  tematicasAbordadas: boolean = true;
  estrategiasPedago: boolean = true;
  actividadesAsig: boolean = true;
  complejidad: string = "";
  agradoProfe: boolean = true;
  asignaturaVidaTrab: string = "";
  cargaTrabajo: boolean = true;
  exigenciaAsig: string = "";
  notasTiempo: boolean = true;
  retroalimentacion: boolean = true;
  incidenciaProfe: boolean = true;
  comentarios: string = "";

  constructor(
    public alertController: AlertController,
    private activatedRoute :ActivatedRoute, 
    private asignaturaService : AsignaturaService, 
    private tematicasService : TematicaService,
    public toastCtrl: ToastController,
    private reseniaService: ReseniaServiceService,
    private toastController: ToastController 
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const asignaturaID = paramMap.get('asignaturaID');
      if (asignaturaID !== null) {
        this.findAsignatura(+asignaturaID);
      } 
    });
    console.log(this.asignaturaSelect);
    this.error_visibility = false;
    this.mensajeError = "";
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

  async guardarOpinion(){
    if (this.comentarios.length === 0) {
      await this.alertaElementoNoSeleccionado(
        "Sin comentarios",
        "Para continuar con la reseña se debe ingresar un comentario."
      );
    }else{
      this.reseniaService.resenia(
        this.aprendizaje,
        this.tematicasAbordadas,
        this.estrategiasPedago,
        this.actividadesAsig,
        this.complejidad,
        this.agradoProfe,
        this.asignaturaVidaTrab,
        this.cargaTrabajo,
        this.exigenciaAsig,
        this.notasTiempo,
        this.retroalimentacion,
        this.incidenciaProfe,
        this.comentarios,
        this.asignaturaSelect.id
      ).subscribe(
        results => {
          const resenia: Resenia | null = results.body;
          if (resenia !== null) {
            this.presentToast('top' );
          }
        },
        error => {
          this.error_visibility = true;
          this.mensajeError = error;
          console.error(error);
        }
      );
    }
  }

  findAsignatura(asignaturaID:number){
    this.asignaturaService.getAsignaturaById(asignaturaID).subscribe(
      results => {
        console.log(results);
        this.asignaturaSelect = results;
      },
      error => console.error(error)
    )

  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'La reseña ha sidocreada',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
  

}
