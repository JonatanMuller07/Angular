import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { RandomUserServiceProvider } from '../../providers/random-user-service/random-user-service';
import { UserDetailPage } from '../../pages/user-detail/user-detail';
import { AuthFirebaseProvider } from '../../providers/auth-firebase/auth-firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[] = [];

  constructor(private navCtrl: NavController, public user: RandomUserServiceProvider, 
    public menu: MenuController, private auth:AuthFirebaseProvider) {

  }
  //Menu desplegable
  openMenu() {
    this.menu.open();
  }

  closeMenu() {
    this.menu.close();
  }

  toggleMenu() {
    this.menu.toggle();
  }

  userDetail(user) {
    this.navCtrl.push(UserDetailPage, { user: user });
  }

  //observer
  ionViewDidLoad() {
    this.loadUser();
  }

  loadUser() {
    this.user.getUsers().subscribe(
      (data) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
  }
  //promise
  loadPromise() {
    this.user.getUsersPromise().then(
      (data) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    )
  }

  refresh(refresher) {
    setTimeout(() => {
      refresher.complete();
      this.loadUser();
    }, 2000);
  }

  logOut(){
    this.auth.logOut();
    this.navCtrl.pop();
  }
}
