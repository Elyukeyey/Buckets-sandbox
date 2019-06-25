import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-bucket-content',
  templateUrl: './bucket-content.component.html',
  styleUrls: ['./bucket-content.component.css']
})
export class BucketContentComponent implements OnInit {
  @Input() id: number;
  bucket$: Observable<any>
  constructor(private store: StoreService) { }

  ngOnInit() {

  }

}