import {loadStripe, Stripe} from "@stripe/stripe-js";
import {INgxStripeConfig} from "./ngx-stripe.service";
import {BehaviorSubject} from "rxjs";

export class NgxStripeContext {
    public Stripe: BehaviorSubject<Stripe | null> = new BehaviorSubject<Stripe | null>(null) ;
    private stripeHasLoaded = false;

    constructor(
        public Config: INgxStripeConfig
    ) {
        this.InitialiseStripe().then();
    }

    public async InitialiseStripe(): Promise<NgxStripeContext | null> {

        const publicKey = this.Config.publicKey;

        // Validate the key
        if (!this.KeyValid(publicKey)) {
            return null;
        }

        try {
            const stripe = await loadStripe(publicKey);
            this.Stripe.next(stripe);
            this.stripeHasLoaded = true;
            return this;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    private KeyValid(key: string): boolean {

        if (key.length === 0) {
            console.warn('No public key was provided');
            return false;
        }

        if (key.startsWith('pk_test')) {
            console.warn(`Running test key: ${key}`);
            return true;
        }

        if (key.startsWith('pk_live')) {
            return true;
        }

        if (key.startsWith('sk')) {
            console.error(`%c NgxStripe: It looks like you're using a secret key, that's not right`, 'font-size: 24px; color: red;');
            return false;
        }

        return false;

    }

}
