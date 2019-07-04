import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-border-control',
  templateUrl: './border-control.component.html',
  styleUrls: ['./border-control.component.css']
})
export class BorderControlComponent implements OnInit {
  user: { username: string, key: string }

  constructor(private store: StoreService) { }

  ngOnInit() {
  }


}