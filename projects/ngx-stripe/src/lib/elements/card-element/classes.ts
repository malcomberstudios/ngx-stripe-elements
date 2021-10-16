import {ICardElementConfig, ICardElementStyleConfig, ICardElementStyleSubmitButtonConfig} from "./interfaces";
import {CardElementComponent} from "./card-element.component";
import {Stripe, StripeElementStyle} from "@stripe/stripe-js";

export class CardElementConfig implements ICardElementConfig {
  billingDetails = {};
  processPayment?: (stripe: Stripe, card: CardElementComponent["card"]) => Promise<void>;

  style = new CardElementStyleConfig()
}

export class CardElementStyleConfig implements ICardElementStyleConfig {
  submitButtonStylConfig: CardElementStyleSubmitButtonConfig = new CardElementStyleSubmitButtonConfig();
  stripeElementStyle: StripeElementStyle = {
    base: {
      color: '#CFD7DF',
      fontSize: '18px',
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238',
      },
    }
  }
}

export class CardElementStyleSubmitButtonConfig implements ICardElementStyleSubmitButtonConfig {
  alignment: "left" | "middle" | "right" = "right";
  class: string = "";
}
