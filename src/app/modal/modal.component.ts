import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  content: string;
  @Input()
  okText: string;
  @Input()
  cancelText: string;
  @Input()
  isVisible: string;

  @Output()
  isVisibleChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    this.isVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.isVisibleChange.emit(false);
  }
}
