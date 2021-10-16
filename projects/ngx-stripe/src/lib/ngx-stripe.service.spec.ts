import { TestBed } from '@angular/core/testing';

import { NgxStripeService } from './ngx-stripe.service';

describe('NgxStripeService', () => {
  let service: NgxStripeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStripeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
