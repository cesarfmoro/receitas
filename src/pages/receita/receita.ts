import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { ListaComprasService } from "../../services/lista-compras";
import { ReceitasService } from "../../services/receitas";

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html'
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitasService ) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
    this.receitasService.removeReceita(this.index);
    this.navCtrl.popToRoot();
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);
  }


}
