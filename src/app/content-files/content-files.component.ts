import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../interfaces';

@Component({
  selector: 'app-content-files',
  templateUrl: './content-files.component.html',
  styleUrls: ['./content-files.component.css']
})
export class ContentFilesComponent implements OnInit {
  @Input() file: Content;

  constructor() { }

  ngOnInit() {
  }

}