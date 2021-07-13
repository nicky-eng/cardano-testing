import { Component, OnInit } from '@angular/core';

import { Store } from '../store';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  storeList: Store[] = [];

  /* // Used if getStores Returns an observable
  getStores(): void {
    this.storesService.getStores()
      .subscribe(storeList => this.storeList = storeList);
  } */
  getMyStores(): void {
    this.storeList = this.storesService.getStores();
  }

  constructor(private storesService: StoresService) { }

  ngOnInit() {
    this.getMyStores();
  }


}
