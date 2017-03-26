import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ListaComprasService } from "../../services/lista-compras";
import { Ingrediente } from "../../models/ingrediente";

@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html'
})
export class ListaComprasPage {

  listaItens : Ingrediente[];

  constructor(private listaComprasService:ListaComprasService) {}

 
  incluiItem(form: NgForm) {
    console.log(form);
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    form.reset();
    this.carregaItens();
  }

  ionViewWillEnter() {
    this.carregaItens();
  }

  carregaItens() {
    this.listaItens=this.listaComprasService.getItens();
  }

}
