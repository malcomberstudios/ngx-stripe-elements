import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {PaymentMethod, PaymentRequest, PaymentRequestOptions, Stripe} from "@stripe/stripe-js";

import {NgxStripeService} from "../../ngx-stripe.service";

@Component({
  selector: 'ngx-stripe-payment-request-button',
  template: `
    <div id="payment-request-button"></div>
  `
})
export class PaymentRequestButtonComponent implements OnInit, AfterViewInit {

  @Input() PaymentRequest: PaymentRequestOptions | undefined;
  @Input() OnPaymentRequested: undefined | ((stripe: Stripe, paymentMethod: PaymentMethod) => Promise<void>);

  public stripe: Stripe | null | undefined;
  private PaymentRequestButton: PaymentRequest | undefined;

  constructor(
    private service: NgxStripeService
  ) {
  }

  ngOnInit(): void {

    if (!this.PaymentRequest) {
      throw new Error('No Payment Request provided')
    }
  }

  ngAfterViewInit(): void {


    this.service.Stripe.subscribe(stripe => {
      if (this.PaymentRequest && stripe) {
        this.stripe = stripe;
        this.PaymentRequestButton = stripe.paymentRequest(this.PaymentRequest);
        const elements = stripe.elements();
        // @ts-ignore
        const button = elements.create('paymentRequestButton', {
          paymentRequest: this.PaymentRequestButton
        })

        this.PaymentRequestButton.on('paymentmethod', async (ev) => {
          if (this.stripe && this.OnPaymentRequested) {
            await this.OnPaymentRequested(this.stripe, ev.paymentMethod);
          }
        });

        this.PaymentRequestButton.canMakePayment().then(result => {
          if (result && button) {
            button.mount('#payment-request-button');

          } else {
            console.warn(`Cannot run payment request button, check you're serving on HTTPS`);
          }
        })
      }

    });
  }

}
