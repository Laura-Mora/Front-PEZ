import { Component, OnInit } from '@angular/core';
import { Programa } from '../Model/Programa/programa';
import { Usuario } from '../Model/Usuario/usuario';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../Model/Usuario/usuario.service';

@Component({
  selector: 'app-falta-programa-suge',
  templateUrl: './falta-programa-suge.page.html',
  styleUrls: ['./falta-programa-suge.page.scss'],
})
export class FaltaProgramaSugePage implements OnInit {

  faltaPrograma: Programa = new Programa();
  usuario: Usuario | null;
  idPrograma: Number = 0;

  constructor(
    public toastCtrl: ToastController,
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
        this.mostrarAsignaturasCursarPrograma(+programaID)
      } 
    });
  }

  mostrarAsignaturasCursarPrograma(id:Number){
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.cursarPrograSuge(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.faltaPrograma = JSON.parse(results);
          console.log(this.faltaPrograma);
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
