import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {INgxStripeConfig, NgxStripeConfig, NgxStripeService} from "./ngx-stripe.service";
import {NgxStripeContext} from "./ngx-stripe.context";




@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ]
})
export class NgxStripeModule {

  constructor(@Optional() @SkipSelf() parentModule?: NgxStripeModule) {
    if (parentModule) {
      throw new Error(
        'NgxStripeModule is already loaded. Import it in the AppModule only');
    }
  }

  static Initialise(config: INgxStripeConfig): ModuleWithProviders<NgxStripeModule>{
    const context = new NgxStripeContext(config);
    return {
      ngModule: NgxStripeModule,
      providers: [
        {
          provide: NgxStripeConfig, useValue: config
        },
        {
          provide: NgxStripeContext, useValue: context
        },
        NgxStripeService
      ]
    }
  }
}
