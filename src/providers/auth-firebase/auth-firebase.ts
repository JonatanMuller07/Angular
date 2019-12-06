import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

/*
  Generated class for the AuthFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthFirebaseProvider {

  constructor(private angularFire: AngularFireAuth) {
    console.log('Hello AuthFirebaseProvider Provider');
  }

  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFire.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
        res => resolve(res),
        err => reject(err)
        );
    })
  }

  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
        res => resolve(res),
        err => reject(err)
        );
    })
  }

  logOut(){
    if(this.angularFire.authState){
      this.angularFire.auth.signOut();
    }
  }
}
