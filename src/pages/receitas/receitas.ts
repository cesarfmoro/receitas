import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditaReceitaPage } from "../edita-receita/edita-receita";

@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html'
})
export class ReceitasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  novaReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'New'});
  }

}
