import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  name:string='';
  age:number=0;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.name= this.navParams.get('name');
    this.age= this.navParams.get('age');
    console.log(this.name, this.age);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeWhitParameters(){
    let data={
      name:'lenin',
      age:29,
      coords:{
        lat:10,
        lng:-10
      }
    };
    this.viewCtrl.dismiss( data );
  }

  closeWhitoutParameters(){
    this.viewCtrl.dismiss();
  }
}
