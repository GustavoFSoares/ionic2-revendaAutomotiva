import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { AgendamentosPage } from "../pages/agendamentos/agendamentos";
import { PerfilPage } from "../pages/perfil/perfil";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage = LoginPage;
    
    @ViewChild(Nav)
    public nav: Nav;
    
    public paginas = [ 
        {titulo: "Agendamento", componente: AgendamentosPage},
        {titulo: "Perfil", componente: PerfilPage}, 
    ];
    
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
