import { Component, OnInit, Input} from '@angular/core';
import { Observable, of } from 'rxjs';

import { StoreService } from '../store.service'

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  buckets$: Observable<any>;
  bucket: {id: string, name: string, location: string };

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.state$.subscribe(({buckets}) => this.buckets$ = buckets);
  }
}