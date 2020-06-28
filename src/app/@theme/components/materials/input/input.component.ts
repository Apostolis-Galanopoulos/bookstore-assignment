import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'bookstore-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit, AfterViewInit {

  @Input() parentForm: FormGroup;
  @Input() dirty: boolean;
  @Input() errors: any;
  @Input() controlName: string;
  @Input() label: string;
  @Input() inputType: string = 'text';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
