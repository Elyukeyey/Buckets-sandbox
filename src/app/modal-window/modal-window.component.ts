import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService, DELETE } from '../store.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @Input() action: { type: string, payload: Object };
  @Input() modal: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter(); 

  constructor(private store: StoreService) { }

  ngOnInit() {
  }

  toggleModal() {
    this.modal = !this.modal;
    this.close.emit(this.modal);
  }

  confirm() {
    this.store.dispatch(this.action);
    this.toggleModal();
  }

}