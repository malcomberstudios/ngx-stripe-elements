import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardElementComponent} from "./card-element.component";


@NgModule({
  declarations: [
    CardElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardElementComponent
  ]
})
export class CardElementModule {
}
