import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from './store';



@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private storeList: Store[] = [];
  public myObject: any;


  private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json'

  /* Comment above storesUrl and uncomment this URL for testing purposes
   when using the local API */
  //private storesUrl = 'http://localhost:8000/stores/?format=json';

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
