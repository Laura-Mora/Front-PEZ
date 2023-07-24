import { Component, OnInit } from '@angular/core';
import { ReseniaServiceService } from '../Model/Resenia/resenia-service.service';
import { Resenia } from '../Model/Resenia/resenia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opiniones-asignatura',
  templateUrl: './opiniones-asignatura.page.html',
  styleUrls: ['./opiniones-asignatura.page.scss'],
})
export class OpinionesAsignaturaPage implements OnInit {

  mensajeError: string | undefined;
  error_visibility: boolean | undefined;

  resenias: Resenia[] = [];

  constructor(
    private activatedRoute :ActivatedRoute, 
    private reseniaService: ReseniaServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const asignaturaID = paramMap.get('asignaturaID');
      if (asignaturaID !== null) {
        this.findResenia(+asignaturaID);
      } 
    });
    console.log(this.resenias);
    this.error_visibility = false;
    this.mensajeError = "";
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
