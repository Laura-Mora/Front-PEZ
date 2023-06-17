import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../../Model/Asignatura/asignatura';
import { AsignaturaService } from '../../Model/Asignatura/asignatura.service';
import { Tematica } from '../../Model/Tematica/tematica';
import { TematicaService } from '../../Model/Tematica/tematica.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datos-asignatura',
  templateUrl: './datos-asignatura.page.html',
  styleUrls: ['./datos-asignatura.page.scss'],
})
export class DatosAsignaturaPage implements OnInit {

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
    private activatedRoute :ActivatedRoute, 
    private asignaturaService : AsignaturaService, 
    private tematicasService : TematicaService,
    public toastCtrl: ToastController 
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const asignaturaID = paramMap.get('asignaturaID');
      if (asignaturaID !== null) {
        this.findAsignatura(+asignaturaID);
      } 
    });
    console.log(this.asignaturaSelect)
  }

  guardarOpinion(){
    
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

}
