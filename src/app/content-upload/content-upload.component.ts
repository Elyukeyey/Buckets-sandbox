import { Component, OnInit, Input } from '@angular/core';
import { StoreService, ADD_CONTENT } from '../store.service';

@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  payload: { bucketId: string, filename: string, filesize: number }
  
  constructor(private store: StoreService) { }

  ngOnInit() {
  }

   parseChanges = (event: Event, textfield: HTMLLabelElement) => {
    // console.log(event.target.files[0]);
    // change the label text
    textfield.innerText = event.target.files[0].name;
    
    // add to Bucket

    this.payload = {
      bucketId: this.id,
      filename: event.target.files[0].name,
      filesize: event.target.files[0].size
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.store.dispatch({ type: ADD_CONTENT, payload: this.payload });
  } 


}