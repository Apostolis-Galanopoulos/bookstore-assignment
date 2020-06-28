import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bookstore-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit, AfterViewInit {

  @Input() parentForm: FormGroup;
  @Input() dirty: boolean;
  @Input() errors: any;
  @Input() controlName: string;
  @Input() label: string;
  @Input() minlength: number;
  @Input() maxlength: number;
  @Input() pattern: string;
  @Input() min: string;
  @Input() max: string;
  @Input() cols: number;
  @Input() rows: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
