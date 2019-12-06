import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RandomUserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RandomUserServiceProvider {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  getUsersPromise() {
    return this.http.get('https://randomuser.me/api/?results=25').toPromise();
  }
}
