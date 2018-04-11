import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animals = ANIMALES.slice(0);
  constructor(public navCtrl: NavController) {

  }
  play(item: any) {
    console.log(item);
  }
}
