import { SettingsPage } from './../settings/settings';
import { OverviewPage } from './../overview/overview';
import { AccountsPage } from './../accounts/accounts';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BucketsPage } from '../buckets/buckets';
import { NotificationsPage } from '../notifications/notifications';
import { LogoutPage } from '../logout/logout';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = NotificationsPage;
  tab2 = AccountsPage ;
  tab3 = BucketsPage;
  tab4 = OverviewPage;
  tab5 = LogoutPage;

  constructor(public navCtrl: NavController) {



  }

}
