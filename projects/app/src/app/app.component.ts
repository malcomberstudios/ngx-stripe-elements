import {Component, OnInit} from '@angular/core';
import {ICardElementConfig} from "ngx-stripe";
import {Observable, of} from "rxjs";
import {NgxStripeService} from "ngx-stripe";
import {PaymentMethod, PaymentRequest, PaymentRequestOptions, Stripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
