import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxStripeModule, CardElementModule, PaymentRequestButtonModule} from "ngx-stripe";
import { MainComponent } from './pages/main/main.component';
import { CardElementComponent } from './pages/components/card-element/card-element.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStripeModule.Initialise({publicKey: environment.stripeKey}),
    CardElementModule,
    PaymentRequestButtonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
