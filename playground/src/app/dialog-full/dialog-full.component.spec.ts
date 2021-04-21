import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFullComponent } from './dialog-full.component';

describe('DialogFullComponent', () => {
  let component: DialogFullComponent;
  let fixture: ComponentFixture<DialogFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
