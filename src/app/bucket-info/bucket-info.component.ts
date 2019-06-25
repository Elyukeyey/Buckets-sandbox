import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-bucket-info',
  templateUrl: './bucket-info.component.html',
  styleUrls: ['./bucket-info.component.css']
})
export class BucketInfoComponent implements OnInit {
  buckets: Observable<any>;
  
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.state$.subscribe(({ buckets }) => this.buckets = buckets);
  }

}