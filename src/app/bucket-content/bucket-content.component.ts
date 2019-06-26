import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoreService, DELETE } from '../store.service';

@Component({
  selector: 'app-bucket-content',
  templateUrl: './bucket-content.component.html',
  styleUrls: ['./bucket-content.component.css']
})
export class BucketContentComponent implements OnInit {
  id: string;
  bucket$: Observable<any>
  constructor(private store: StoreService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    // get id
    this.id = this.route.snapshot.paramMap.get('id');

    // get buckets
    this.store.state$.pipe(
      map(({buckets}) => buckets),

      // subscribe
    ).subscribe(data => {

      // redirect if invalid id
      const newData = data.map(({ id }) => id);
      const index = newData.indexOf(this.id);
      if(index === -1) {
        this.router.navigate(['']);
      }
      // otherwise set the bucket data
      this.bucket$ = data[index];
    });

  }

  deleteBucket = (payload) => {
    this.store.dispatch({ type: DELETE, payload });
  } 

}