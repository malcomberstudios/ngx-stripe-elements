import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaymentRequestButtonComponent} from "./payment-request-button.component";



@NgModule({
  declarations: [
    PaymentRequestButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaymentRequestButtonComponent
  ]
})
export class PaymentRequestButtonModule { }
