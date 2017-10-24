import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  modal1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  activeMain(){
    this.navCtrl.parent.select(2);
  }

  openModal(){
    let modal= this.modalCtrl.create( ModalPage, {name:'Lenin Samaniego', age: 29} );
    modal.present();
    modal.onDidDismiss(parameters=>{
      if(parameters){
        console.log('data parametros', parameters);
      }else{
        console.log('Se cerro el modal sin parametros');
      }      
    });
  }
}
