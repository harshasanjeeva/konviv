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

import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TabsPage ;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Buckets', component: BucketsPage },
      { title: 'Accounts', component: AccountsPage },
      { title: 'Overview', component: OverviewPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Help', component: HelpPage },
      { title: 'Bills', component: BillsPage },
      { title: 'Savings', component: SavingsPage },
      { title: 'Login', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
