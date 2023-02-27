import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIButtonComponent } from './components/ui-button/ui-button.component';


@NgModule({
  declarations: [
    UIButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UIButtonComponent
  ]
})
export class SharedModule { }
