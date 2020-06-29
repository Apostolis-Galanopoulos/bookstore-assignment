import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'bookstore-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, AfterViewInit {

  @Input() valid = false;
  @Input() color: string;
  @Input() size: string;

  @Output() clickEvent = new EventEmitter();

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  click() {
    this.clickEvent.emit('clicked');
  }
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
