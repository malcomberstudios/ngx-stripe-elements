import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequestButtonComponent } from './payment-request-button.component';

describe('PaymentRequestButtonComponent', () => {
  let component: PaymentRequestButtonComponent;
  let fixture: ComponentFixture<PaymentRequestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRequestButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
