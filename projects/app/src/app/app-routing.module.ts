import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardElementComponent} from "./pages/components/card-element/card-element.component";

const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'card-element',
        component: CardElementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
