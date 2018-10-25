import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCsSliderComponent } from './ngx-cs-slider.component';

describe('NgxCsSliderComponent', () => {
  let component: NgxCsSliderComponent;
  let fixture: ComponentFixture<NgxCsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
