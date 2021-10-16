import {CardElementComponent} from "./card-element.component";
import {PaymentMethodCreateParams, Stripe, StripeElementStyle} from "@stripe/stripe-js";

export interface ICardElementConfig {
  billingDetails?: PaymentMethodCreateParams.BillingDetails;
  style?: ICardElementStyleConfig
  processPayment?: (stripe: Stripe, card: CardElementComponent["card"]) => Promise<void>;
}

export interface ICardElementStyleConfig {
  submitButtonStylConfig?: ICardElementStyleSubmitButtonConfig;
  stripeElementStyle?: StripeElementStyle;
}

export interface ICardElementStyleSubmitButtonConfig {
  class?: string;
  alignment?: "left" | "middle" | "right";
}

