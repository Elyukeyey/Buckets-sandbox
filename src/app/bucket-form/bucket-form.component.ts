import { Component, OnInit } from '@angular/core';

import { StoreService, ADD } from '../store.service';
import { Bucket } from '../interfaces';

@Component({
  selector: 'app-bucket-form',
  templateUrl: './bucket-form.component.html',
  styleUrls: ['./bucket-form.component.css']
})
export class BucketFormComponent implements OnInit {
  bucketNameInput: HTMLInputElement;
  locations: string[] = ['Ljubljana','Kranj','Maribor','Koper'];

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  _genId = () => Math.random().toString(24).substr(2,6);

  onSubmit (e, name, location) {
    e.preventDefault();
    const payload: Bucket = {
      id: this._genId(),
      name: name.value,
      location: location.value,
      content: {
        files: [],
        sizes: [],
      }
    };
    this.store.dispatch({ type: ADD, payload: payload});
  }
}