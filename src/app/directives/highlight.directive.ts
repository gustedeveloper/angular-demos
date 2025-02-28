import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el = el;
  }

  @HostListener('mouseenter')
  onMouseEnterEvent() {
    this.el.nativeElement.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
