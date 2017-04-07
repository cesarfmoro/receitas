import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { Receita } from "../../models/receita";
import { ReceitasService } from "../../services/receitas";
import { ReceitaPage } from "../receita/receita";

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

  carregaReceita(receita: Receita, index: number) {
    this.navCtrl.push(ReceitaPage, {receita: receita, index: index});
  }
}
