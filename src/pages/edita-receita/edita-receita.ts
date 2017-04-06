import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'page-edita-receita',
  templateUrl: 'edita-receita.html'
})
export class EditaReceitaPage {
 
  mode = 'Nova';
  niveisDificuldade = ['Fácil', 'Médio', 'Difícil'];
  formReceita: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mode = this.navParams.get('mode');
    this.iniciaForm();
  }

  private iniciaForm() {
    this.formReceita=new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'descricao': new FormControl(null, Validators.required),
      'dificuldade': new FormControl('Médio', Validators.required)
    });
  }

  envia() {
    console.log(this.formReceita);
  }



}
