import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page1Page } from "../index.pages";
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  page1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page1= Page1Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigatePage(){
    this.navCtrl.push(Page1Page);
  }
}
