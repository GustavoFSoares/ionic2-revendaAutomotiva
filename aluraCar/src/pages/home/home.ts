import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
// import { EscolhaPage } from "../escolha/escolha";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit{
    
    public carros;

    constructor(public navCtrl: NavController, private _http: Http,
        private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) { }

    ngOnInit(){
        let loader = this._loadingCtrl.create({ content: 'Buscando novos Carros' });
        loader.present();

        this._http
            .get('http://aluracar.herokuapp.com/').map(res => res.json())
            .toPromise().then(carros => {
                this.carros = carros
                loader.dismiss();
            })
            .catch(err => {
                console.log(err);
                loader.dismiss();
                this._alertCtrl.create({
                    title: "Falha na Conexão",
                    buttons: [{ text: "Ok" }],
                    subTitle: "Não foi possível se conectar ao servidor. Verifique sua conexão",
                }).present();
            });

    }

    selecionar(carro){
        // this.navCtrl.push(EscolhaPage);
        console.log('123');
        
        console.log(carro);
                
    }

}
