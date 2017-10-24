import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { 
  MainPage,
  SettingsPage,
  Settings2Page,
  ModalPage,
  Page1Page,
  Page2Page,
  Page3Page,
  TabsPage } from "../pages/index.pages";

import { MyApp } from './app.component';

@NgModule({
  declarations: [    
    MyApp,
    MainPage,
    SettingsPage,
    Settings2Page,
    ModalPage,
    Page1Page,
    Page2Page,
    Page3Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    SettingsPage,
    Settings2Page,
    ModalPage,
    Page1Page,
    Page2Page,
    Page3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
