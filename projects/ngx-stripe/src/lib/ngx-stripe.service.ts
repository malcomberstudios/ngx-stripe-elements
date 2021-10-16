import {Injectable} from '@angular/core';
import {Stripe} from '@stripe/stripe-js';
import {NgxStripeContext} from "./ngx-stripe.context";
import {BehaviorSubject} from "rxjs";

export interface INgxStripeConfig {
  publicKey: string;
  disableWarnings?: boolean;
}

export class NgxStripeConfig implements INgxStripeConfig {
  publicKey = '';
  disableWarnings = false;
}


@Injectable({
  providedIn: 'root'
})
export class NgxStripeService {

  public Stripe: BehaviorSubject<Stripe | null>
  constructor(public stripeContext: NgxStripeContext) {
    this.Stripe = stripeContext.Stripe;
  }



}
