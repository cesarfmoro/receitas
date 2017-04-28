import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AutenticacaoService } from "../../services/autenticacao";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private autenticacaoService: AutenticacaoService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {}

  signup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o registro da aplicação'
    });
    loading.present();
    this.autenticacaoService.signup(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no registro',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
