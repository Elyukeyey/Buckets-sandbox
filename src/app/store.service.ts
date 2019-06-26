import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Bucket } from './interfaces';

// consts
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const ADD_CONTENT = 'ADD_CONTENT';

export const BUCKET = 'BUCKET';

// state
const initState: { user: string, buckets: Bucket[] } = {
  user: 'test',
  buckets: []
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  prevState: Object[];
  state: { user: string, buckets: Bucket[] };
  state$: BehaviorSubject<any>;

  constructor() {
    const localStore = this._getLocalStorage();
    if (!localStore) {
      this.state = { ...initState }
    } else {
      this.state = localStore;
    }
    this.prevState = [this.state];
    this.state$ = new BehaviorSubject<any>(this.state);
  }

  // private functions:

  // local storage
  _setLocalStorage = () => localStorage.setItem(BUCKET, JSON.stringify(this.state));

  _getLocalStorage = () => JSON.parse(localStorage.getItem(BUCKET));

  // content:
  _addContent = (indx, content) => {
    const { name, size } = content,
    arr = [...this.state.buckets];

    let index = arr.map(({ id }) => id).indexOf(indx);
    arr[index].content.files.push(content.file);
    arr[index].content.sizes.push(content.size);
    console.log(arr[index].content);
  }

  // reducers:
  bucketReducer = (action) => {
    const { type, payload } = action;
    switch(type) {
      case ADD: return { ...this.state, buckets: [...this.state.buckets, payload] };
      case DELETE:
        const index = [...this.state.buckets].map(({ id }) => id ).indexOf(payload);
        const newState = [... this.state.buckets];
        newState.splice(index, 1);
        return {...this.state, buckets: newState };
      case ADD_CONTENT:
        this._addContent(payload.id, payload.content);
      default:
        return this.state;
    }
  }

  dispatch = (action) => {
    this.prevState.push(this.state);
    this.state = this.bucketReducer(action);
    this.state$.next(this.state);
    this._setLocalStorage();
  }
}