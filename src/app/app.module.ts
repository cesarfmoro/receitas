import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReceitasPage } from "../pages/receitas/receitas";
import { ReceitaPage } from "../pages/receita/receita";
import { EditaReceitaPage } from "../pages/edita-receita/edita-receita";
import { TabsPage } from "../pages/tabs/tabs";
import { ListaComprasPage } from "../pages/lista-compras/lista-compras";
import { ListaComprasService } from "../services/lista-compras";
import { ReceitasService } from "../services/receitas";

@NgModule({
  declarations: [
    MyApp,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage,
    ListaComprasPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage,
    ListaComprasPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
