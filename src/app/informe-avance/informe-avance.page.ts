import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-informe-avance',
  templateUrl: './informe-avance.page.html',
  styleUrls: ['./informe-avance.page.scss'],
})
export class InformeAvancePage implements OnInit {

  constructor(
    private modalController:ModalController, 
    public toastCtrl: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }


}
