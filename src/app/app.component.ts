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
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/tabs/tabs';
import { ToptabsPage } from './../pages/toptabs/toptabs';

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
  rootPage = TabsPage;
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
      { title: 'Help', component: HelpPage },
      { title: 'Login', component: LoginPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Settings', component: SettingsPage },
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
