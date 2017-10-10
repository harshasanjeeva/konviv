import { SettingsPage } from './../settings/settings';
import { OverviewPage } from './../overview/overview';
import { AccountsPage } from './../accounts/accounts';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


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

  tab1 = HomePage;
  tab2 = AccountsPage ;
  tab3 = OverviewPage;
  tab4 = SettingsPage;
  constructor(public navCtrl: NavController) {



  }

}
