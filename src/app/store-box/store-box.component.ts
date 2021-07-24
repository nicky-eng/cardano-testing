import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Store } from '../store';


@Component({
  selector: 'app-store-box',
  templateUrl: './store-box.component.html',
  styleUrls: ['./store-box.component.css']
})
export class StoreBoxComponent implements OnChanges {

  @Input() store!: Store;

  @Input() index!: number;

  constructor() { }

  ngOnChanges() { }

  ngOnInit() {
  }

}
