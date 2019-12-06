import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthFirebaseProvider } from '../../providers/auth-firebase/auth-firebase';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nuevo={}
  errores:any;

  constructor(private auth:AuthFirebaseProvider, public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  crearUsuario(nuevo){
    this.auth.createUser(nuevo).then(res=> {
       this.navCtrl.pop();
    }).catch(err => {
       console.log(err);
       this.errores = err;
    });
  }

}
