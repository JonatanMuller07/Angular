import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthFirebaseProvider } from '../../providers/auth-firebase/auth-firebase';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formulario = {}
  promise;
  errores;
  validations_form : FormGroup;

  constructor(public auth: AuthFirebaseProvider, public navCtrl: NavController, 
    public navParams: NavParams, public formBuilder: FormBuilder) {
  }

  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  ionViewDidLoad() {
  }

  
  signup() {
    this.navCtrl.push(HomePage);
  }
  crearCuenta(){
    this.navCtrl.push(RegistroPage);
  }

  tryLogin(formulario) {
    this.auth.doLogin(formulario).then(res => {
      this.signup();
    }).catch(err => {
      this.errores = err;
    });
  }

}
