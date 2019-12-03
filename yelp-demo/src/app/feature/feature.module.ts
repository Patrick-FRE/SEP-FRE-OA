import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceCreamComponent } from './ice-cream/ice-cream.component';



@NgModule({
  declarations: [IceCreamComponent],
  exports: [
    IceCreamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
