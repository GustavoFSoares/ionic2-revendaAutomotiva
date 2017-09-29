import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import {  } from "module";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
