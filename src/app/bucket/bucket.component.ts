import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService, DELETE, ADD_CONTENT } from '../store.service';
import { Bucket } from '../interfaces';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  @Input() bucket: Bucket;
  buckets$: Observable<Bucket[]>
  size: number;
  files: number;
  
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.state$.subscribe(({ buckets })=> this.buckets$ = buckets);
    this.files = this.bucket.content.length;
    this.size = this.bucket.content.map(({ filesize }) => filesize).reduce(( acc = 0, filesize ) => {
        return acc + filesize
      }, 0);
  }

  deleteBucket(id) {
    let index = [...this.buckets$].map(({ id }) => id ).indexOf(id);
    this.store.dispatch({type: DELETE, payload: index});
  }
}