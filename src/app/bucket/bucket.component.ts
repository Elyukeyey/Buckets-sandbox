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
  @Input() bucket: {id: string, name: string, location: string };
  buckets$: Observable<Bucket[]>
  
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.state$.subscribe(({ buckets })=> this.buckets$ = buckets);
  }

  deleteBucket(id) {
    let index = [...this.buckets$].map(({ id }) => id ).indexOf(id);
    this.store.dispatch({type: DELETE, payload: index});
  }
  addcontent(id) {
    const content = {
      file: `test file ${Math.floor(Math.random()*100)}`,
      size: Math.floor(Math.random()*(1024^3))
    }
    this.store.dispatch({type: ADD_CONTENT, payload: { id, content }});
  }
}