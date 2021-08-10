import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { Store } from '../store';
import { StoresService } from '../stores.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  loading: boolean = false;

  storeList: Store[] = [];

  getStores(): void {
    this.storeList = this.storesService.getStores();
  }


  constructor(private _loading: LoadingService,
    private storesService: StoresService) { }

  ngOnInit() {
    this.getStores();
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }




}
