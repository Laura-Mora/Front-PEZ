import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form-perso-asign',
  templateUrl: './form-perso-asign.page.html',
  styleUrls: ['./form-perso-asign.page.scss'],
})
export class FormPersoAsignPage implements OnInit {

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

  guardar(){

  }

}
