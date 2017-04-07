import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ReceitasService } from "../../services/receitas";

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
    private alertController:AlertController,
    private toastController:ToastController,
    private receitasService: ReceitasService) {
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
    const value = this.formReceita.value;
    let ingredientes = [];
    if (value.ingredientes.length > 0) {
      ingredientes = value.ingredientes.map(nome => {
        return {nome: nome, quantidade: 1};
      });
    }
    this.receitasService.adicionaReceita(value.nome, value.descricao, value.dificuldade, ingredientes);
    this.formReceita.reset();
    this.navCtrl.popToRoot();
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
            const fArray: FormArray = <FormArray>this.formReceita.get('ingredientes');
            const  len = fArray.length;
            if (len >0) {
              for (let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
              }
              const toast = this.toastController.create({
                message: 'Todos ingrediente removidos',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
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
              const toast = this.toastController.create({
                message: 'Entre com um valor válido!',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
              return;
            }
            (<FormArray>this.formReceita.get('ingredientes'))
              .push(new FormControl(data.nome, Validators.required));
            const toast = this.toastController.create({
              message: 'Ingrediente adicionado',
              duration: 2000,
              position: 'bottom'
            });
            toast.present();
          }
        }
      ]
    });
  }

}
