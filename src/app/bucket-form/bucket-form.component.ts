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

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  _genId = () => Math.random().toString(24).substr(2,6);

  onSubmit (e, { value }) {
    e.preventDefault();
    const payload: Bucket = {
      id: this._genId(),
      name: value,
      location: (Math.random() > 0.5) ? 'Ljubljana' : 'Kranj',
      content: {
        files: [],
        sizes: [],
      }
    };
    this.store.dispatch({ type: ADD, payload: payload});
  }
}