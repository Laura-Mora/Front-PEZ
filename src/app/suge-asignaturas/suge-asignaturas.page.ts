import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-suge-asignaturas',
  templateUrl: './suge-asignaturas.page.html',
  styleUrls: ['./suge-asignaturas.page.scss'],
})
export class SugeAsignaturasPage implements OnInit {

  asignaturas = [""];

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  infoAsignatura(){
    
  }
}
