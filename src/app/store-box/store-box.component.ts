import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { Store } from '../store';

@Component({
  selector: 'app-store-box',
  templateUrl: './store-box.component.html',
  styleUrls: ['./store-box.component.css']
})
export class StoreBoxComponent implements OnChanges {
  faMapMarkerAlt = faMapMarkerAlt;
  @Input() store!: Store;

  @Input() index!: number;

  constructor() { }

  ngOnChanges() { }

  ngOnInit() {
  }

}
