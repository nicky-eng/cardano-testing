import { Injectable } from '@angular/core';
import { Store } from './store'
import stores from './stores.json';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  public storeList: Store[] = stores;

  getStores(): Store[] {
    return this.storeList;
  }

  constructor() { }
}
