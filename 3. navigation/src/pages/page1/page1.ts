import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page2Page } from "../index.pages";
/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {
  mutants:any[];
  page2:any= Page2Page;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mutants=[
      {
        name:'Magneto',
        power: 'Controlar Metales'
      },{
        name:'Wolverine',
        power:'Regeneracion Acelerada'
      },{
        name: 'Profesor X',
        power: 'Poderes Psicos'
      },{
        name: 'Gambito',
        power: 'Cargar objetos inanimados con Energia'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

  navigatePage(mutant:any){
    console.log(mutant);
    this.navCtrl.push(Page2Page,{'mutant': mutant});
  }

}
