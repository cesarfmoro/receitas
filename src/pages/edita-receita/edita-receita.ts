import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edita-receita',
  templateUrl: 'edita-receita.html'
})
export class EditaReceitaPage {
 
  mode = 'Nova';
  niveisDificuldade = ['Fácil', 'Médio', 'Difícil'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mode = this.navParams.get('mode');

  }



}
