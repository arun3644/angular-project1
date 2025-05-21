import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'   // ← your directive’s selector
})
export class DirectiveDirective {
  @Input('appHighlight') highlightColor = 'yellow';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  // On mouse enter: set background color
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlightColor);
  }

  // On mouse leave: remove background
  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(null);
  }

  private setBackground(color: string | null) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      color
    );
  }
}
