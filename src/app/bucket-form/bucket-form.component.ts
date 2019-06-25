import { Component, OnInit } from '@angular/core';

import { StoreService, ADD } from '../store.service';

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

  onSubmit (e, { value }) {
    e.preventDefault();
    const payload = {
      id: Math.random().toString(24).substr(2,6),
      name: value,
      location: (Math.random() > 0.5) ? 'Ljubljana' : 'Kranj'
    };
    this.store.dispatch({ type: ADD, payload: payload});
  }
  onAddBucket({ value }) {
    const payload = {
      id: Math.random().toString(24).substr(2,6),
      name: value,
      location: (Math.random() > 0.5) ? 'Ljubljana' : 'Kranj'
    };
    this.store.dispatch({ type: ADD, payload: payload});
    value = '';
    //this.addBucket.emit(payload);
  }
}