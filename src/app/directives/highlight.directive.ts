import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  color = 'lightblue';
  constructor(private el: ElementRef) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter')
  onMouseEnterEvent() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeaveEvent() {
    this.highlight('');
  }
}
