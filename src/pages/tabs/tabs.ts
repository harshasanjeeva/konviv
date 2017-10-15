import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  tab1: any = NotificationsPage;
  tab2: any = AccountsPage ;
  tab3: any = HomePage;
  tab4: any = OverviewPage;
  tab5: any = LogoutPage;

/*
  tab6 = BillsPage;
  tab7 = HomePage;
  tab8 = SavingsPage;
*/
  constructor(public navCtrl: NavController) {



  }

}
