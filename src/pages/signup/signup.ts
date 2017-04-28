import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AutenticacaoService } from "../../services/autenticacao";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private autenticacaoService: AutenticacaoService) {}

  signup(form: NgForm) {
    this.autenticacaoService.signup(form.value.email, form.value.senha)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

}
