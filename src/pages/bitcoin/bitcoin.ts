import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BiitcoinProvider } from '../../providers/biitcoin/biitcoin';
import { Observable } from 'rxjs/Observable';
import { Bitcoin } from '../../models/bitcoin.model';

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
currency:string='GBP';
bitcoin$:Observable<Bitcoin>;
  constructor(private bitP:BiitcoinProvider) {
  }

  ionViewWillLoad() {
    this.getBitPrice();
  }

  getBitPrice(){

    this.bitcoin$= this.bitP.getBitcoinPrice(this.currency);
  }

}
