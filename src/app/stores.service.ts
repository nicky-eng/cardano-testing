import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from './store'


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private storeList: Store[] = [];

  private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json';
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
