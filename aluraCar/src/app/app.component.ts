import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AgendamentosPage } from "../pages/agendamentos/agendamentos";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage = HomePage;
    
    @ViewChild(Nav)
    public nav: Nav;
    
    public paginas = [ {titulo: "Agendamento", componente: AgendamentosPage}, ];
    
    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    abrePagina(pagina){
        this.nav.push(pagina.componente)
    }
}
