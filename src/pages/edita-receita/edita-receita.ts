import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'page-edita-receita',
  templateUrl: 'edita-receita.html'
})

export class EditaReceitaPage {
 
  mode = 'Nova';
  niveisDificuldade = ['Fácil', 'Médio', 'Difícil'];
  formReceita: FormGroup;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private actionSheetController:ActionSheetController,
    private alertController:AlertController) {
    this.mode = this.navParams.get('mode');
    this.iniciaForm();
  }

  private iniciaForm() {
    this.formReceita=new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'descricao': new FormControl(null, Validators.required),
      'dificuldade': new FormControl('Médio', Validators.required),
      'ingredientes': new FormArray([])
    });
  }

  envia() {

  }

  editaIngredientes() {
    const actionSheet = this.actionSheetController.create({
      title: 'Escolha uma opção',
      buttons: [
        {
          text: 'Adiciona ingrediente',
          handler:() => {
            this.criaAlertaNovoIngrediente().present();
          }
        },
        {
          text: 'Remove todos ingredientes',
          role: 'destructive',
          handler:() => {

          }
        },
        {
          text: 'Cancela',
          role: 'cancel'
        }
        ]
    });
    actionSheet.present();
  }

  private criaAlertaNovoIngrediente() {
    return this.alertController.create({
      title: 'Adiciona Ingrediente',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome'
        }
      ],
      buttons: [
        {
          text: 'Cancela',
          role: 'cancel'
        },
        {
          text: 'Adiciona',
          handler: data => {
            if (data.nome.trim() == '' || data.nome == null) {
              return;
            }
            (<FormArray>this.formReceita.get('ingredientes'))
              .push(new FormControl(data.nome, Validators.required));
          }
        }
      ]
    });
  }

}
