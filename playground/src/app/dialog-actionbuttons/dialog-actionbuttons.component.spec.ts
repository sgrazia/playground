import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActionbuttonsComponent } from './dialog-actionbuttons.component';

describe('DialogActionbuttonsComponent', () => {
  let component: DialogActionbuttonsComponent;
  let fixture: ComponentFixture<DialogActionbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogActionbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActionbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
