import { Component, OnInit } from '@angular/core';
import { ReseniaServiceService } from '../Model/Resenia/resenia-service.service';
import { Resenia } from '../Model/Resenia/resenia';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from '../Model/Asignatura/asignatura.service';
import { Asignatura } from '../Model/Asignatura/asignatura';

@Component({
  selector: 'app-opiniones-asignatura',
  templateUrl: './opiniones-asignatura.page.html',
  styleUrls: ['./opiniones-asignatura.page.scss'],
})
export class OpinionesAsignaturaPage implements OnInit {

  mensajeError: string | undefined;
  error_visibility: boolean | undefined;

  asignaturaSelect : Asignatura =  new Asignatura();
  resenias: Resenia[] = [];

  constructor(
    private activatedRoute :ActivatedRoute, 
    private reseniaService: ReseniaServiceService,
    private asignaturaService: AsignaturaService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const asignaturaID = paramMap.get('asignaturaID');
      if (asignaturaID !== null) {
        this.findAsignatura(+asignaturaID);
        this.findResenia(+asignaturaID);
      } 
    });
    console.log(this.resenias);
    this.error_visibility = false;
    this.mensajeError = "";
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

  findResenia(asignaturaID:number){
    this.reseniaService.getReseniaAsignatura(asignaturaID).subscribe(
      results => {
        console.log(results);
        this.resenias = results;
      },
      error => console.error(error)
    )

  }

}
