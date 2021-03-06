import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  mutant:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.mutant= this.navParams.get('mutant');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  navigateLast(){
    this.navCtrl.pop();
  }
  navigateRoot(){
    this.navCtrl.popToRoot();
  }
}
