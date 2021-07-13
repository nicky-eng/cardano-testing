import { Component } from '@angular/core';

import { Store } from './store';
import { StoresService } from './stores.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
    storeList: Store[] = [];
  
    getStores(): void {
      this.storesService.getStores()
        .subscribe(storeList => this.storeList = storeList);
    }
    */

  title = 'Ada and Friends - Business Directory';

  constructor(private storesService: StoresService) { }


}

