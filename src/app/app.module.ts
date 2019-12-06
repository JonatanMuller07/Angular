import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environment/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RandomUserServiceProvider } from '../providers/random-user-service/random-user-service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { LoginPage } from '../pages/login/login';
import { AuthFirebaseProvider } from '../providers/auth-firebase/auth-firebase';
import { RegistroPage } from '../pages/registro/registro';
import { ProductsProvider } from '../providers/products/products';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    UserDetailPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserDetailPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RandomUserServiceProvider,
    AuthFirebaseProvider,
    ProductsProvider
  ]
})
export class AppModule {}
