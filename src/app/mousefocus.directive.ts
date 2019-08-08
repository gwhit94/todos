import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouseFocus]'
})
export class MousefocusDirective {
  @HostBinding('style.background-color') private bgColor: string;

  @HostListener("mouseenter") onMouseEnter(){
    this.bgColor = "blue";
  }
  @HostListener("mouseleave") onMouseLeave(){
    this.bgColor = "purple";
  }
  @HostListener("mousedown") onMouseDown(){
    this.bgColor = "yellow";
  }
  @HostListener("mouseup") onMouseUp(){
    this.bgColor = null;
  }

  constructor() { }

}
