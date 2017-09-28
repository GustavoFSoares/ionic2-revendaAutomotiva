import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Carro } from "../../domain/carro/carro";
import { Agendamento } from "../../domain/agendamento/agendamento";
import { AgendamentoService } from "../../domain/agendamento/agendamento-service";

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

    public agendamento: Agendamento;
    private _alert: Alert;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private _alertCtrl: AlertController,
        private _service: AgendamentoService,
    ) {
        
            this.carro = this.navParams.get('carro');
            this.precoTotal = this.navParams.get('precoTotal');
            this._alert = this._alertCtrl.create({
                title: "Aviso",
                buttons: [{text: "OK", handler: () => this.navCtrl.setRoot(HomePage)}]
            });

            this.agendamento = new Agendamento(this.carro, this.precoTotal)
    }

    agenda(){       
        this._service.agenda(this.agendamento).then(
            confirmado => { 
                confirmado ?
                    this._alert.setSubTitle("Agendamento realizado com Sucesso!") :
                    this._alert.setSubTitle("Não foi possível realizar o agendamento");
                this._alert.present();
            }).catch( err => {
                console.log(err);
                this._alert.setSubTitle(err.message);
                this._alert.present();
            });
    }
}
