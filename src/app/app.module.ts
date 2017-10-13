import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountsPage } from './../pages/accounts/accounts';
import { BillsPage } from './../pages/bills/bills';
import { BucketsPage } from './../pages/buckets/buckets';
import { HelpPage } from './../pages/help/help';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { LogoutPage } from './../pages/logout/logout';
import { NotificationsPage } from './../pages/notifications/notifications';
import { OverviewPage } from './../pages/overview/overview';
import { ProfilePage } from './../pages/profile/profile';
import { SavingsPage } from './../pages/savings/savings';
import { SegmentTestPage } from './../pages/segment-test/segment-test';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountsPage,
    BillsPage,
    BucketsPage,
    HelpPage,
    LoginPage,
    LogoutPage,
    NotificationsPage,
    OverviewPage,
    ProfilePage,
    SavingsPage,
    SegmentTestPage,
    SettingsPage,
    TabsPage
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
    BillsPage,
    BucketsPage,
    HelpPage,
    LoginPage,
    LogoutPage,
    NotificationsPage,
    OverviewPage,
    ProfilePage,
    SavingsPage,
    SegmentTestPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
