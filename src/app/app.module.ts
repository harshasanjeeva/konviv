import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from './../pages/home/home';
import { AccountsPage } from './../pages/accounts/accounts';
import { OverviewPage } from './../pages/overview/overview';
import { SettingsPage } from './../pages/settings/settings';
import { HelpPage } from './../pages/help/help';
import { LoginPage } from './../pages/login/login';
import { BucketsPage } from './../pages/buckets/buckets';
import { BillsPage } from './../pages/bills/bills';
import { SavingsPage } from './../pages/savings/savings';
import { NotificationsPage } from './../pages/notifications/notifications';
import { LogoutPage } from './../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountsPage,
    OverviewPage,
    SettingsPage,
    HelpPage,
    TabsPage,
    LoginPage,
    BucketsPage,
    BillsPage,
    SavingsPage,
    NotificationsPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountsPage,
    OverviewPage,
    SettingsPage,
    HelpPage,
    TabsPage,
    LoginPage,
    BucketsPage,
    BillsPage,
    SavingsPage,
    NotificationsPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
