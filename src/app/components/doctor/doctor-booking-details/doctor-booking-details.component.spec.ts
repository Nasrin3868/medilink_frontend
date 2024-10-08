import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookingDetailsComponent } from './doctor-booking-details.component';

describe('DoctorBookingDetailsComponent', () => {
  let component: DoctorBookingDetailsComponent;
  let fixture: ComponentFixture<DoctorBookingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorBookingDetailsComponent]
    });
    fixture = TestBed.createComponent(DoctorBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
