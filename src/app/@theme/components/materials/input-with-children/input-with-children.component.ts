import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'bookstore-input-with-children',
  templateUrl: './input-with-children.component.html',
  styleUrls: ['./input-with-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWithChildrenComponent implements OnInit, AfterViewInit{

  @Output() onAddEvent = new EventEmitter();
  @Output() onRemoveEvent = new EventEmitter();

  @Input() parentForm: FormGroup;
  @Input() listOfChildren: FormArray;
  @Input() controlName: string;
  @Input() label: string;
  @Input() buttonAddLabel: string
  @Input() buttonRemoveLabel: string;
  @Input() maxChild: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  
  } 

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  add() {
    this.onAddEvent.emit();
  }

  remove(index: number) {
    this.onRemoveEvent.emit(index);
  }
}
