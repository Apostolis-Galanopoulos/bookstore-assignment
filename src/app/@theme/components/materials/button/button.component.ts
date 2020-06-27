import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookstore-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() valid: boolean;
  @Input() color: string;

  @Output() onClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.onClickEvent.emit('clicked');
  }

}
