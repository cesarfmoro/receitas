import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html'
})
export class ListaComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

 
  incluiItem(form: NgForm) {
    console.log(form);

  }


}
