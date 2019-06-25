import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// consts
export const ADD = 'ADD';
export const DELETE = 'DELETE';

// state
const initState: { buckets: Object[], user: string } = {
  user: 'test',
  buckets: []
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  prevState: {};
  state: { user: string, buckets: Object[] };
  state$: BehaviorSubject<any>;

  constructor() { 
    this.state = { ...initState }
    this.state$ = new BehaviorSubject<any>(this.state);
  }

  bucketReducer = (action) => {
    const { type, payload } = action;
    switch(type) {
      case ADD: return { ...this.state, buckets: [...this.state.buckets, payload] };
      case DELETE:
        let newState = [... this.state.buckets];
        newState.splice(payload, 1);
        return {...this.state, buckets: newState };
      default:
        return this.state;
    }
  }

  dispatch = (action) => {
    this.prevState = this.state;
    this.state = this.bucketReducer(action);
    this.state$.next(this.state);
  }
}