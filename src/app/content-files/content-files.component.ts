import { Component, OnInit, Input } from '@angular/core';
import { StoreService, DELETE_CONTENT } from '../store.service';
import { Content, Bucket, Action } from '../interfaces';

@Component({
  selector: 'app-content-files',
  templateUrl: './content-files.component.html',
  styleUrls: ['./content-files.component.css']
})
export class ContentFilesComponent implements OnInit {
  @Input() file: Content;
  @Input() bucket: Bucket;
  action: Action;
  modal = false;

  constructor(private store: StoreService) { 
  }

  ngOnInit() {
  }

  onDeleteFile(e) {
    this.action = { type: DELETE_CONTENT, payload: { id: this.bucket.id, file: this.file.filename }};
    this.toggleModal();
    //this.store.dispatch({ type: DELETE_CONTENT, payload: { id: this.bucket.id, file: this.file.filename }});
  }

  toggleModal() {
    this.modal = !this.modal;
  }

}