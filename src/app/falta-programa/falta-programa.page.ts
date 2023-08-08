import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/Usuario/usuario';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { Programa } from '../Model/Programa/programa';
import { LoginService } from '../servicios/login.service';
import { ProgramaService } from '../Model/Programa/programa.service';
import { PerfilEstudiante } from '../Model/Perfil-Estudiante/perfil-estudiante';
import { PerfilEstudianteService } from '../Model/Perfil-Estudiante/perfil-estudiante.service';
import { Componente } from '../Model/Componente/componente';
import { SubComponente } from '../Model/SubComponente/sub-componente';
import { ComponenteService } from '../Model/Componente/componente.service';
import { SubComponenteService } from '../Model/SubComponente/sub-componente.service';
import { forkJoin } from 'rxjs';
import { UsuarioService } from '../Model/Usuario/usuario.service';

@Component({
  selector: 'app-falta-programa',
  templateUrl: './falta-programa.page.html',
  styleUrls: ['./falta-programa.page.scss'],
})
export class FaltaProgramaPage implements OnInit {

  programas: Programa[]  = [];
  componentes: Componente[] = [];
  subcomponentes: SubComponente[] = [];
  asignaturas: Asignatura[] = [];
  programasSuge: Programa[] = [];
  usuario: Usuario | null;
  perfil: PerfilEstudiante | undefined;

  constructor(
    private loginService: LoginService,
    private proService: ProgramaService,
    private perfilService: PerfilEstudianteService,
    private compoService: ComponenteService,
    private subcompoService: SubComponenteService,
    private userService: UsuarioService
  ) {
    this.usuario = this.loginService.getUser();
    console.log(this.usuario);
    //this.findProgramas();
    //this.findAsignaturas();
    this.mostrarFaltaPrograma();
   }

  ngOnInit() {
  }

  mostrarFaltaPrograma(){
    if (this.usuario?.id !== undefined) {
      this.userService.faltaProgramas(this.usuario.id).subscribe(
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
