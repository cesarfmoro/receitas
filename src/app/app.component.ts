import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from "../pages/tabs/tabs";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import firebase from 'firebase';
import { AutenticacaoService } from "../services/autenticacao";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isAuthenticated: boolean;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen,
      private autenticacaoService: AutenticacaoService) {
    firebase.initializeApp({
      apiKey: "AIzaSyCxhEcAcWft7ZybgGwlzgTyM2foOgYD5Pg",
      authDomain: "receitas-22363.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated=true;
        this.nav.setRoot(this.tabsPage);
      } else {
        this.isAuthenticated=false;
        this.nav.setRoot(this.signinPage);
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  carrega(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
