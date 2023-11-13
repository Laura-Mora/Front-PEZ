import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Model/Usuario/usuario';
import { Asignatura } from '../Model/Asignatura/asignatura';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../Model/Usuario/usuario.service';

@Component({
  selector: 'app-asignaturas-comun',
  templateUrl: './asignaturas-comun.page.html',
  styleUrls: ['./asignaturas-comun.page.scss'],
})
export class AsignaturasComunPage implements OnInit {


  usuario: Usuario | null;
  idPrograma: Number = 0;
  asignaturasC: Asignatura[] = [];

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
        this.asiganturasComun(+programaID);
      } 
    });
  }
  
  asiganturasComun(id:Number){
    this.idPrograma = id;
    if (this.usuario?.id !== undefined) {
      this.userService.asignaturaComun(this.usuario.id,this.idPrograma).subscribe(
        results => {
          this.asignaturasC = results;
          console.log(this.asignaturasC);
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
