import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateScaleComponent } from './rate-scale.component';

describe('RateScaleComponent', () => {
  let component: RateScaleComponent;
  let fixture: ComponentFixture<RateScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
