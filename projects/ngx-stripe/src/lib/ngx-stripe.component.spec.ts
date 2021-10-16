import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStripeComponent } from './ngx-stripe.component';

describe('NgxStripeComponent', () => {
  let component: NgxStripeComponent;
  let fixture: ComponentFixture<NgxStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStripeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
