import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { EditaReceitaPage } from "../edita-receita/edita-receita";

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html'
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {

  }


}
