import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTitlebarComponent } from './dialog-titlebar.component';

describe('DialogTitlebarComponent', () => {
  let component: DialogTitlebarComponent;
  let fixture: ComponentFixture<DialogTitlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTitlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTitlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
