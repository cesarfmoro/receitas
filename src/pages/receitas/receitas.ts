import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { Receita } from "../../models/receita";
import { ReceitasService } from "../../services/receitas";

@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html'
})
export class ReceitasPage {

  receitas: Receita[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, private receitaService: ReceitasService) {
    
  }

  ionViewWillEnter() {
    this.receitas = this.receitaService.getReceitas();
  }

  novaReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Nova'});
  }

  carregaReceita() {

  }
}
