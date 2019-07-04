import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Bucket } from './interfaces';

// consts
export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const ADD_CONTENT = 'ADD_CONTENT';
export const DELETE_CONTENT = 'DELETE_CONTENT';
export const LOGIN = 'LOGIN';

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

  _index = (id, arr) => {
    return arr.map(({ id }) => id).indexOf(id);
  }

  _addContent = (payload) => {
    const { bucketId, filename, filesize } = payload;
    const arr = [...this.state.buckets];

    let index = this._index(bucketId, arr);
    arr[index].content.push({ filename, filesize });

    return arr
  }

  _deleteContent = (payload) => {
    const { id, file } = payload;
    const arr = [...this.state.buckets];

    let index = this._index(id,arr);
    const fileArr = arr[index].content.map(({ filename }) => filename);
    let fileIndx = fileArr.indexOf(file);
    const newState = arr[index].content.splice(fileIndx, 1);

    return arr
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
        return { ... this.state, buckets: this._addContent(payload) };
      case DELETE_CONTENT:
        return { ... this.state, buckets: this._deleteContent(payload) };
      case LOGIN: 
        return {
        ...this.state, user: payload
      };
      default:
        return this.state;
    }
  }

  dispatch = (action) => {
    this.prevState.push(this.state);
    this.state = this.bucketReducer(action);
    this.state$.next(this.state);
    this._setLocalStorage();
    localStorage.setItem('STATE_HISTORY',JSON.stringify(this.prevState));
  }
}