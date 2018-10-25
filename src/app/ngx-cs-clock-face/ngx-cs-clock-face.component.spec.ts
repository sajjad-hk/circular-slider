import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCsClockFaceComponent } from './ngx-cs-clock-face.component';

describe('NgxCsClockFaceComponent', () => {
  let component: NgxCsClockFaceComponent;
  let fixture: ComponentFixture<NgxCsClockFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCsClockFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCsClockFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
