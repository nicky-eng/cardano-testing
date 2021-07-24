import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from './store'
import stores from './stores.json';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  // GoogleMap pin works
  // private storeList: Store[] = stores;

  // getStores(): Store[] {
  //   return this.storeList;
  // }


  private storeList: Store[] = [];

  private storesUrl = 'https://testing-cardano-back.herokuapp.com/stores/?format=json';
  getStores(): Store[] {
    this.http.get(this.storesUrl).toPromise()
      .then(data => {

        for (let item in data) {
          this.storeList.push(data[item]);
        }
      });
    return this.storeList
  }

  constructor(
    private http: HttpClient) { }

}
