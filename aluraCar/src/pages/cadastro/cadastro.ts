import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Carro } from "../../domain/carro/carro";
// import { Acessorio } from "../../domain/carro/acessorio";

/*
Generated class for the Cadastro page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html'
})
export class CadastroPage {

    public carro: Carro;
    public precoTotal: number;

    public nome: string;
    public endereco: string;
    public email: string;
    public data: string = new Date().toISOString();

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.carro = this.navParams.get('carro');
        this.precoTotal = this.navParams.get('precoTotal');
        
    }

    agenda(){
        console.log(this);
        
    }
}
