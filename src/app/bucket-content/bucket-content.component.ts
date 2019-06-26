import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content } from '../interfaces';

import { StoreService, DELETE, ADD_CONTENT } from '../store.service';

@Component({
  selector: 'app-bucket-content',
  templateUrl: './bucket-content.component.html',
  styleUrls: ['./bucket-content.component.css']
})
export class BucketContentComponent implements OnInit {
  id: string;
  bucket$: Observable<any>;
  payload: { bucketId: string, filename: string, filesize: number };
  file: Content;

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

  parseChanges = (event: Event, textfield: HTMLLabelElement) => {
    console.log(event.target.files[0]);
    // change the label text
    textfield.innerText = event.target.files[0].name;
    
    // add to Bucket

    this.payload = {
      bucketId: this.id,
      filename: event.target.files[0].name,
      filesize: event.target.files[0].size
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.store.dispatch({ type: ADD_CONTENT, payload: this.payload });
  } 

}