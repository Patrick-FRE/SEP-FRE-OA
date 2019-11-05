import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
  colorList = ['red','blue','yellow','black','purple'];
  @HostBinding("style.color") color:string
  @HostListener("change") changeColor(){
      this.color = this.colorList[Math.round(Math.random()*this.colorList.length)]
  }
  constructor() { }

}
