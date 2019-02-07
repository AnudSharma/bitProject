import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bitcoin } from '../../models/bitcoin.model';

/*
  Generated class for the BiitcoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BiitcoinProvider {

  private ROOT_URL=
  'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';

  constructor(private http: HttpClient) {}
    

    getBitcoinPrice(currency:string){
      return this.http.get<Bitcoin>(`${this.ROOT_URL}${currency}`);

    
  }

}
