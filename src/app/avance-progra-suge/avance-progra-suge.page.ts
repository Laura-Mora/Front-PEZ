import { Component, OnInit } from '@angular/core';
import { Programa } from '../Model/Programa/programa';
import { Usuario } from '../Model/Usuario/usuario';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../Model/Usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avance-progra-suge',
  templateUrl: './avance-progra-suge.page.html',
  styleUrls: ['./avance-progra-suge.page.scss'],
})
export class AvancePrograSugePage implements OnInit {

  programas: Programa = new Programa();
  usuario: Usuario | null;
  idPrograma: Number = 0;

  constructor(
    private activatedRoute :ActivatedRoute, 
    private loginService: LoginService,
    private userService: UsuarioService
    ) { 
      this.usuario = this.loginService.getUser();
      console.log(this.usuario);

    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const programaID = paramMap.get('programaID');
      if (programaID !== null) {
        this.mostrarAvanceEstudiante(+programaID);
      } 
    });
  }

  mostrarAvanceEstudiante(id:Number) {
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.avancePrograSuge(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.programas = JSON.parse(results);
          console.log(this.programas);
        },
        error => {
          console.log(error);
          
        }
      );
    } else {
      console.log('El ID del usuario no está definido.');
      
    }
  }
}
