import { Component, OnInit, Input } from '@angular/core';
import { StoreService, DELETE_CONTENT } from '../store.service';
import { Content, Bucket } from '../interfaces';

@Component({
  selector: 'app-content-files',
  templateUrl: './content-files.component.html',
  styleUrls: ['./content-files.component.css']
})
export class ContentFilesComponent implements OnInit {
  @Input() file: Content;
  @Input() bucket: Bucket;
  constructor(private store: StoreService) { 
  }

  ngOnInit() {
  }

  onDeleteFile(e) {
    this.store.dispatch({ type: DELETE_CONTENT, payload: { id: this.bucket.id, file: this.file.filename }});
  }

}