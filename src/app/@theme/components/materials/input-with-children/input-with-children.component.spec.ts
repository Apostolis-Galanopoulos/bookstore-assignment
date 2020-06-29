import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithChildrenComponent } from './input-with-children.component';

describe('InputWithChildrenComponent', () => {
  let component: InputWithChildrenComponent;
  let fixture: ComponentFixture<InputWithChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
