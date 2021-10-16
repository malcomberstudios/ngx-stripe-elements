import {NgxStripeContext} from "../../ngx-stripe.context";
import {Stripe} from "@stripe/stripe-js";
import {AfterViewInit, Component, Input, TemplateRef} from "@angular/core";
import {CardElementConfig} from "./classes";
import {ICardElementConfig} from "./interfaces";

@Component({
  selector: 'ngx-stripe-card-element',
  template: `
    <form id="payment-form">
      <div id="card-element">
      </div>
      <div id="card-errors" role="alert"></div>
    </form>
    <div class="submit-button-holder" [ngClass]="SubmitButtonPosition">
      <button *ngIf="!SubmitButton; else showSubmit" [ngClass]="SubmitButtonClass" (click)="ProcessPayment()">Submit
        Payment
      </button>
      <ng-template #showSubmit>
        <ng-container *ngTemplateOutlet="SubmitButtonTemplate"></ng-container>
      </ng-template>
    </div>
  `,
  styleUrls: [
    "card-element.component.css"
  ]
})
export class CardElementComponent implements AfterViewInit {

  private _config: CardElementConfig | undefined;

  @Input() set Config(value: ICardElementConfig) {

    const newConfig = new CardElementConfig();
    if (value.style) {
      if (value.style.submitButtonStylConfig) {
        newConfig.style.submitButtonStylConfig = {...newConfig.style.submitButtonStylConfig, ...value.style.submitButtonStylConfig};
      }
      if (value.style.stripeElementStyle) {
        newConfig.style.stripeElementStyle.base = {...newConfig.style.stripeElementStyle.base}
      }
    }

    if (value.billingDetails) {
      newConfig.billingDetails = value.billingDetails;
    }

    if (value.processPayment) {
      newConfig.processPayment = value.processPayment;
    }

    this._config = newConfig
  }

  public get config(): CardElementConfig {
    if (this._config) {
      return this._config;
    }

    return new CardElementConfig();
  }

  @Input() SubmitButton: TemplateRef<any> | undefined;

  get SubmitButtonTemplate(): TemplateRef<any> | null {
    if (this.SubmitButton) {
      return this.SubmitButton
    }

    return null;
  }

  public stripe: Stripe | null | undefined;
  public card: any;

  constructor(
    private context: NgxStripeContext
  ) {
  }

  ngAfterViewInit(): void {


    this.context.Stripe.subscribe(stripe => {
      this.stripe = stripe;
      const style = this.config.style.stripeElementStyle;

      const elements = stripe?.elements();
      const card = elements?.create('card', {style});
      card?.mount('#card-element');
      this.card = card;
    });

  }

  get SubmitButtonClass(): string | string[] {
    return this.config?.style.submitButtonStylConfig.class as string;
  }

  get SubmitButtonPosition(): string {
    return this.config.style.submitButtonStylConfig.alignment;
  }

  public async ProcessPayment(): Promise<void> {

    if (!this.stripe) {
      throw new Error('Stripe not initialised');
      return;
    }

    if (!this.config.processPayment) {
      throw new Error('You need to assign a handler for processPayment config property')
    }

    await this.config.processPayment(this.stripe, this.card);
  }

}
