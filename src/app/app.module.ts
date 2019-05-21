import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, NavParams } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireFunctionsModule } from "@angular/fire/functions";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginPageModule } from './login/login.module';

import { HomePageModule } from './home/home.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ApprovedComponent } from './approved/approved.component';
import { DeclineComponent } from './decline/decline.component';

@NgModule({
  declarations: [AppComponent , ApprovedComponent , DeclineComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'kshatriyasargarajeevansathi-1'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule , // imports firebase/storage only needed for storage features
    AngularFireFunctionsModule,
    LoginPageModule,
    HomePageModule
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
