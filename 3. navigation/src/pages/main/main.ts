import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { Page1Page } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  page1:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl:MenuController) {
    this.page1= Page1Page;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigatePage(){
    this.navCtrl.push(Page1Page);
  }

  openMenu(){
    this.menuCtrl.toggle();
  }
}
