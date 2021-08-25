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
  paginationNext: string = '';
  paginationPrevious: string = '';
  numberOfPages: number;
  currentPage: number;
  pagesShown: any[] = []; //TODO: Replace this with a class


  getStores(url?: string) {
    this.storesService.getStores(url).subscribe((data: JSON) => {
      this.storeList = data['results'];
      this.paginationNext = data['next'];
      this.paginationPrevious = data['previous'];
      this.numberOfPages = Math.ceil(data['count'] / 1);

      console.log(this.paginationNext)

      // Extraction ofthe current page number from "next page" link
      if (this.paginationNext !== null) {
        this.currentPage = Number(this.paginationNext.split('page=')[1]) - 1;
      } else {
        this.currentPage = this.numberOfPages;
      }

      // Selection of the page numbers to be displayed on the pagination nav

      this.pagesShown = []; // We reset the list on every API call

      if (this.numberOfPages <= 5 || [1, 2].includes(this.currentPage)) {
        for (let i = 1; i < (this.numberOfPages + 1); i++) {
          this.pagesShown.push({
            "number": i,
            "address": `http://localhost:8000/stores/?format=json&page=${i}`
          })

          if (this.pagesShown.length == 5) {
            break
          }
          console.log("current Page", this.currentPage)
          console.log(i);
          console.log(this.pagesShown);
        }
      } else if ([this.numberOfPages, this.numberOfPages - 1].includes(
        this.currentPage)) {
        for (let i = (this.currentPage - 4);
          i < this.numberOfPages + 1; i++) {
          this.pagesShown.push({
            "number": i,
            "address": `http://localhost:8000/stores/?format=json&page=${i}`
          })

          console.log("current Page", this.currentPage)
          console.log(i);
          console.log(this.pagesShown);
        }
      } else {
        for (let i = this.currentPage - 2; i < this.currentPage + 3; i++) {
          this.pagesShown.push({
            "number": i,
            "address": `http://localhost:8000/stores/?format=json&page=${i}`
          })

          console.log("current Page", this.currentPage)
          console.log(i);
          console.log(this.pagesShown);


        }
      }
    });
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
