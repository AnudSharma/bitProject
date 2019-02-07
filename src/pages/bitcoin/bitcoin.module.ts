import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BitcoinPage } from './bitcoin';
import {BiitcoinProvider} from '../../providers/biitcoin/biitcoin'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BitcoinPage,
  ],
  imports: [
    IonicPageModule.forChild(BitcoinPage),HttpClientModule
  ],
  providers:[BiitcoinProvider]
})
export class BitcoinPageModule {}
