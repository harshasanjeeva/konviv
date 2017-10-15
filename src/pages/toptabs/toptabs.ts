import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingsPage } from './../settings/settings';
import { OverviewPage } from './../overview/overview';
import { AccountsPage } from './../accounts/accounts';
import { HomePage } from '../home/home';
import { BucketsPage } from '../buckets/buckets';
import { NotificationsPage } from '../notifications/notifications';
import { LogoutPage } from '../logout/logout';
import { BillsPage } from '../bills/bills';
import { SavingsPage } from '../savings/savings';

/**
 * Generated class for the ToptabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toptabs',
  templateUrl: 'toptabs.html',
})
export class ToptabsPage {

  tab0 = BillsPage;
  tab1 = HomePage;
  tab2 = SavingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
