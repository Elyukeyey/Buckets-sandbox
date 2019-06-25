import { Component, OnInit, Input } from '@angular/core';

import { StoreService, DELETE } from '../store.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  @Input() bucket: {id: string, name: string, location: string };
  buckets$: Observable<any>
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.state$.subscribe(({buckets})=> this.buckets$ = buckets);
  }

  deleteBucket(id) {
    let index = [...this.buckets$].map(({ id }) => id ).indexOf(id);
    this.store.dispatch({type: DELETE, payload: index});
  }
}